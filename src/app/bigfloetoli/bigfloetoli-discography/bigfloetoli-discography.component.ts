import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bigfloetoli-discography',
  templateUrl: './bigfloetoli-discography.component.html',
  styleUrls: ['./bigfloetoli-discography.component.scss']
})
export class BigfloetoliDiscographyComponent implements OnInit {
  bigFloOliID: string = "5mmEMfYChd6MImBagU7zCs";
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
    this.spotifyService.getAlbumsOfArtist(this.bigFloOliID)
      .subscribe(response => {
        this.albumsList = response;
        this.filterType();
        // console.log(this.albumsList)
      });
  }

  goToDetailAlbum(album: any) {
    this.router.navigate(['/bigfloetoli/discography', album.id], { queryParams: { name: album.name } })
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

