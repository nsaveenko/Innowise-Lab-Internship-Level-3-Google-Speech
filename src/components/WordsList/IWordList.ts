import { IResultItem } from "../Game/Game";

export interface IWordList {
  setWord?: any;
  page: number;
  song?: HTMLAudioElement;
  results: IResultItem[];
}
