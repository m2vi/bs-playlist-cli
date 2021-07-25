import { GenPlaylistProps, PlaylistProps, SongProps } from 'src/types';
import BeatSaverAPI from 'beatsaver-api';
import { getSong } from './getSong';

export const api = new BeatSaverAPI({
  AppName: 'bs-playlist-cli',
  Version: '0.0.1',
});

export const genPlaylist = async ({
  title,
  author,
  description,
  songs,
}: GenPlaylistProps) => {
  let Songs: SongProps[] = [];

  for (const key of songs) {
    const song = await getSong(api, key);
    if (song) Songs.push(song);
  }

  let playlist: PlaylistProps = {
    playlistTitle: title,
    playlistAuthor: author,
    playlistDescription: description ? description : 'Random Playlist',
    songs: Songs,
    image: '',
  };

  return playlist;
};

export default genPlaylist;
