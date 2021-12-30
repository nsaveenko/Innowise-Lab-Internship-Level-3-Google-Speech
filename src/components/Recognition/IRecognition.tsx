import { IWord } from '../../types/word';
import { IResultItem } from '../Game/Game';

export interface IRecognition {
  activeLevel: number;
  wordItem: IWord;
  results: IResultItem[];
  setResult: any;
}
