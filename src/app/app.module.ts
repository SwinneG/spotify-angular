import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ArtistModule } from './artist/artist.module';
import { SpotifyService } from './spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ArtistModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
   
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
