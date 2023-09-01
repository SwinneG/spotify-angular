import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Album } from './album.model';
import { AlbumTracks } from './album-tracks.model';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

 public artistsData: any = [];

  constructor(
    private http: HttpClient
  ) {}

  public getArtistsFromJsonFile(){
    const JSONurl: string = '/assets/artists.json';

    return this.http.get(JSONurl)
  }

  public getQuery(query: string) {

    const commonUrl: string = `https://api.spotify.com/v1/${query}`;
    const token: string = 'BQCZKslMhFKhet_kJY73sbwz0piYfTARq3KgI0IxliVAAKMVd3oKcPF3cSetMpYXquYVQfQJz3kvxP75qaTKKq_yVNRBI4g6Pu0py-rm9Rh5gikRVQw';

    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Authorization':`Bearer ${token}`
        }
      )
    };

    return this.http.get(commonUrl, httpOptions);
  }

  public getAlbumsOfArtist(artistId:string) {
    
    const url: string = `artists/${artistId}/albums`;
    
    return this.getQuery(url).pipe(
      map((albums: any) => {
          const albumObj = albums.items.map((item:Album) =>
            ({
              total_tracks: item.total_tracks,
              id: item.id,
              images: item.images,
              name: item.name,
              release_date: item.release_date,
              album_type: item.album_type,
              tracks: []
            })
          );
          // console.log(albumObj)
          return albumObj;
        }
      ),
      tap(response => console.log(response)),
      catchError((error) => {
        console.log(error);
        return of({});
      })
    );

  }

  public getDetailAlbumByID(albumId:string){
    const url: string = `albums/${albumId}/tracks`;
    
    return this.getQuery(url).pipe(
      map((tracks: any) => {
        const tracksObj = tracks.items.map((item:AlbumTracks) =>
          ({
            duration_ms: item.duration_ms,
            id: item.id,
            name: item.name,
            track_number: item.track_number
          })
        );
        // console.log(tracksObj)
        return tracksObj;
      }),
      tap((response) => console.log(response)),
      catchError((error) => {
        console.log(error);
        return of({});
      })
    );
  }


}