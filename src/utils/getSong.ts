import { SongProps } from '../types';
import { plain, succ, err, k } from './log';

export const getSong = async (api: any, key: string): Promise<SongProps> => {
  try {
    plain(`Started adding ${k(key)}`);

    const map = await api.getMapDetailsByKey(key);

    const mapEntry: SongProps = {
      songName: map?.name!,
      hash: map?.hash!,
      levelid: map?._id!,
      levelAuthorName: map?.uploader?.username!,
    };

    succ(`Finished adding ${k(key)}`);
    return mapEntry;
  } catch (e) {
    err(`Skipped ${k(key)} (${e.message})`);
    return undefined!;
  }
};
