import { IResultItem } from "../Game/Game";

export interface IRecognition {
  activeLevel: number;
  word: string;
  results: IResultItem[];
  setResult: any;
}
