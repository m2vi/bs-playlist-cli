export interface GenPlaylistProps {
  title: string;
  author: string;
  description: string;
  songs: string[];
}

export interface SongProps {
  songName: string;
  levelAuthorName: string;
  hash: string;
  levelid: string;
}

export interface PlaylistProps {
  playlistTitle: string;
  playlistAuthor: string;
  playlistDescription: string;
  songs: SongProps[];
  image: string;
}

export interface SaveProps {
  dir?: string | undefined;
  playlist: PlaylistProps;
}
