import { IWord } from '../../types/word';
import { IResultItem } from '../Game/Game';

export interface IRecognition {
  handleWorldClick?: any;
  activeLevel: number;
  word: IWord;
  results: IResultItem[];
  setResult: any;
}
