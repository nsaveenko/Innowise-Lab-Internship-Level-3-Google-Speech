import { IResultItem } from "../Game/Game";

export interface IWordItem {
  results: IResultItem[];
  word: string;
  transcription: string;
  image: string;
  audio: string;
  translation?: string;
  handleWorldClick?: any;
}
