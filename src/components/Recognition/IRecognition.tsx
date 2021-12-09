import { IResultItem } from "../Game/Game";

export interface IRecognition {
  word: string;
  result: IResultItem[];
  setResult: any;
}
