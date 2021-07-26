import { GenPlaylistProps, PlaylistProps, SongProps } from 'src/types';
import BeatSaverAPI from 'beatsaver-api';
import { getSong } from './getSong';
import { kowalski } from './image';
import { plain, succ, err } from './log';

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
  try {
    let Songs: SongProps[] = [];

    plain('Started generating playlist\n');

    for (const key of songs) {
      const song = await getSong(api, key);
      if (song) Songs.push(song);
    }

    plain('Started adding playlist details');

    let playlist: PlaylistProps = {
      playlistTitle: title,
      playlistAuthor: author,
      playlistDescription: description ? description : 'Random Playlist',
      songs: Songs,
      image: kowalski,
    };

    succ('Finished playlist');

    return playlist;
  } catch (e) {
    err(`Generating playlist failed (${e.message})`);
    return null!;
  }
};

export default genPlaylist;
