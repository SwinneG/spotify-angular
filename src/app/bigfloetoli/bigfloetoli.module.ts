import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigfloetoliDiscographyComponent } from './bigfloetoli-discography/bigfloetoli-discography.component';
import { BigfloetoliDetailAlbumComponent } from './bigfloetoli-detail-album/bgfloetoli-detail-album.component';
import { SpotifyService } from '../spotify.service';
import { RouterModule, Routes } from '@angular/router';

const bigfloetoliRoutes: Routes = [
  { path:'bigfloetoli/discography', component: BigfloetoliDiscographyComponent},
  { path:'bigfloetoli/discography/:id', component: BigfloetoliDetailAlbumComponent }
];


@NgModule({
  declarations: [
    BigfloetoliDiscographyComponent,
    BigfloetoliDetailAlbumComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(bigfloetoliRoutes)
  ],
  providers: [SpotifyService]
})
export class BigfloetoliModule { }
