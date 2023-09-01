import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  artistsData:any;

  constructor(
    private spotifyService: SpotifyService,
    private router: Router,
  ){}
  
  ngOnInit() {
    this.artistsData = this.spotifyService.getArtistsFromJsonFile()
    .subscribe(response => {
      this.artistsData = response;
      console.log(this.artistsData);
    });
  }

  goToArtistAlbums(artist: any) {
    this.router.navigate([artist.artistId,'discography'])
  }

}
