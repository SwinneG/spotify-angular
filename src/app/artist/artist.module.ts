import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistDiscographyComponent } from './artist-discography/artist-discography.component';
import { ArtistDetailAlbumComponent } from './artist-detail-album/artist-detail-album.component';
import { SpotifyService } from '../spotify.service';
import { RouterModule, Routes } from '@angular/router';

const bigfloetoliRoutes: Routes = [
  { path:':artistId/discography', component: ArtistDiscographyComponent},
  { path:':artistId/discography/:id', component: ArtistDetailAlbumComponent }
];


@NgModule({
  declarations: [
    ArtistDiscographyComponent,
    ArtistDetailAlbumComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(bigfloetoliRoutes)
  ],
  providers: [SpotifyService]
})
export class ArtistModule { }
