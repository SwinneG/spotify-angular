import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-detail-album',
  templateUrl: './artist-detail-album.component.html',
  styleUrls: ['./artist-detail-album.component.scss']
})
export class ArtistDetailAlbumComponent implements OnInit {

  detailAlbum: any = [];
  albumName: any;

  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(){

    //récupérer l'id dans l'url
    const albumId: string|null = this.route.snapshot.paramMap.get('id');
    const albumName: any = this.route.queryParamMap
      .subscribe(params => {
        // console.log(params.get('name'))
        this.albumName = params.get('name')
      })

    if(albumId) {
      this.spotifyService.getDetailAlbumByID(albumId)
        .subscribe(response => {
          this.detailAlbum = response
          // this.detailAlbum = this.detailAlbum.items
          // console.log(this.detailAlbum)
        })
    }


  }

}
