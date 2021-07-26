import fs from 'fs';
import path from 'path';
import { SaveProps } from '../types';
import { err, plain, succ } from './log';

export const save = ({ dir, playlist }: SaveProps) => {
  try {
    plain('Started saving the playlist');
    fs.writeFileSync(
      path.join(dir ? dir : __dirname, `/${playlist.playlistTitle}.bplist`),
      JSON.stringify(playlist, undefined, 2)
    );
    succ(`Playlist saved to ${dir}`);
  } catch (error) {
    err("Couldn't save the playlist");
  }
};
