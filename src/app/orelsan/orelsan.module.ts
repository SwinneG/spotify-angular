import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrelsanDiscographyComponent } from './orelsan-discography/orelsan-discography.component';
import { OrelsanDetailAlbumComponent } from './orelsan-detail-album/orelsan-detail-album.component';
import { SpotifyService } from '../spotify.service';

const orelsanRoutes: Routes = [
  { path:'orelsan/discography', component: OrelsanDiscographyComponent},
  { path:'orelsan/discography/:id', component: OrelsanDetailAlbumComponent }
];

@NgModule({
  declarations: [
    OrelsanDiscographyComponent,
    OrelsanDetailAlbumComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(orelsanRoutes)
  ],
  providers: [SpotifyService]
})
export class OrelsanModule { }
