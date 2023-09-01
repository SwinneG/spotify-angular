import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../spotify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.scss'],
})
export class ArtistDiscographyComponent implements OnInit {
  // bigFloOliID: string = "5mmEMfYChd6MImBagU7zCs";
  albumsList: any = [];
  filteredType: any = [];
  artistId: string = "";

  constructor(
    private spotifyService: SpotifyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const artistId = this.route.snapshot.url[0].path;
    this.artistId = artistId
    // console.log(this.artistId)

    this.responseApi();
  }

  responseApi(){
    this.spotifyService.getAlbumsOfArtist(this.artistId)
      .subscribe(response => {
        this.albumsList = response;
        this.filterType();
        // console.log(this.albumsList)
      });
  }

  goToDetailAlbum(album: any) {
    this.router.navigate([this.artistId,'discography', album.id], { queryParams: { name: album.name } })
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

