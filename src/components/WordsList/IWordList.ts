import { IResultItem } from "../Game/Game";

export interface IWordList {
  setImagePath?: any;
  setAudioPath?: any;
  setWord?: any;
  page: number;
  song?: HTMLAudioElement;
  results: IResultItem[];
}
