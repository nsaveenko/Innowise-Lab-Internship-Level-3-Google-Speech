import { IResultItem } from "../Game/Game";

export interface IResult {
  correctWords: IResultItem[];
  incorrectWords: IResultItem[];
}
