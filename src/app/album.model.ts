import { AlbumTracks } from "./album-tracks.model";

export class Album {
    total_tracks: number;
    id: string;
    images: [];
    name: string;
    release_date: string;
    album_type: string;
    tracks: [AlbumTracks]
}