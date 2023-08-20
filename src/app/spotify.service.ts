import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Album } from './album.model';
import { AlbumTracks } from './album-tracks.model';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) { }

  public getQuery(query: string) {

    const commonUrl: string = `https://api.spotify.com/v1/${query}`;
    const token: string = 'BQA0JUatKI8iqsh0ROYDlgXTbP13Y9WppbUg1JvB7F7HGekjuhMg8o2obFmYkp6JKey-7htTnYIZQX7Uk85j4jsE251BPcCZiO96zjHdTRGINO7-SUU';

    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Authorization':`Bearer ${token}`
        }
      )
    };

    return this.http.get(commonUrl, httpOptions);
  }

  // public getAlbumsOfArtist(artistId:string){
    
  //   const url: string = `artists/${artistId}/albums`;
    
  //   return this.getQuery(url).pipe(
  //     tap((response) => console.log(response)),
  //     catchError((error) => {
  //       console.log(error);
  //       return of({});
  //     })
  //   );

  // }

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

  // public getDetailAlbumByID(albumId:string) {
  //   const url: string = `albums/${albumId}/tracks`;
    
  //   return this.getQuery(url).pipe(
  //     tap((response) => console.log(response)),
  //     catchError((error) => {
  //       console.log(error);
  //       return of({});
  //     })
  //   );
  // }

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