import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/spotify.service';

@Component({
  selector: 'app-orelsan-discography',
  templateUrl: './orelsan-discography.component.html',
  styleUrls: ['./orelsan-discography.component.scss']
})
export class OrelsanDiscographyComponent {
  orelsanID: string = "4FpJcNgOvIpSBeJgRg3OfN";
  albumsList: any = [];
  filteredType: any = [];

  constructor(
    private spotifyService: SpotifyService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.responseApi();
  }

  responseApi(){
    this.spotifyService.getAlbumsOfArtist(this.orelsanID)
      .subscribe(response => {
        this.albumsList = response;
        this.filterType();
      });
  }

  goToDetailAlbum(album: any) {
    this.router.navigate(['/orelsan/discography', album.id], { queryParams: { name: album.name } })
  }

  filterType(type: string | null = null) {
    if (type) {
      this.filteredType = this.albumsList.filter(
        function (x:any) {
          return x.album_type == type 
        }
      );
    } else {
      this.filteredType = this.albumsList;
    }
  }
}
