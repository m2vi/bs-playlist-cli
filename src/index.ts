import yargs from 'yargs';
import genPlaylist from './utils/genPlaylist';
import { save } from './utils/save';

(async () => {
  const args = await yargs
    .options({
      title: {
        type: 'string',
        demandOption: true,
        alias: 't',
        describe: 'Playlist Name/Title',
      },
      author: {
        type: 'string',
        demandOption: true,
        alias: 'a',
        describe: 'Playlist Author',
      },
      description: {
        type: 'string',
        demandOption: true,
        alias: 'd',
        describe: 'Playlist Description',
      },
      songs: {
        type: 'string',
        demandOption: true,
        alias: 's',
        describe: 'Song Keys (e.g. 19be1) divided with a comma (!no space!).',
      },
      output: {
        type: 'string',
        demandOption: false,
        alias: 'out',
        describe: 'Output Directory (Only absolute path)',
      },
    })
    .coerce('songs', (songs: string): string[] => songs.split(',')).argv;

  const { title, author, description, songs, output } = args;

  //@ts-ignore
  const playlist = await genPlaylist({ title, author, description, songs });

  save({ dir: output, playlist });
})();
