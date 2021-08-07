import BeatSaverAPI from 'beatsaver-api';
import { SongProps } from '../types';
import { plain, succ, err, k } from './log';

export const getSong = async (api: BeatSaverAPI, key: string): Promise<SongProps> => {
  try {
    plain(`Started adding ${k(key)}`);

    const map = await api.getMapByID(key);

    const mapEntry: SongProps = {
      songName: map.name,
      hash: map.versions[0].hash,
      levelid: map.id,
      levelAuthorName: map.uploader.name,
    };

    succ(`Finished adding ${k(key)}`);
    return mapEntry;
  } catch (e) {
    err(`Skipped ${k(key)} (${e.message})`);
    return undefined!;
  }
};
