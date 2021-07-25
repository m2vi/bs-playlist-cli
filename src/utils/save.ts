import fs from 'fs';
import path from 'path';
import { SaveProps } from '../types';
import { err } from './log';

export const save = ({ dir, playlist }: SaveProps) => {
  try {
    fs.writeFileSync(
      path.join(dir ? dir : __dirname, `/${playlist.playlistTitle}.bplist`),
      JSON.stringify(playlist, undefined, 2)
    );
  } catch (error) {
    err("Couldn't save the playlist");
  }
};
