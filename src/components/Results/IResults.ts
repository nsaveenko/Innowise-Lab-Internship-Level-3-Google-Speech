import { IResultItem } from "../Game/Game";

export interface IResult {
  results: Array<IResultItem>;
  handleWorldClick?: any;
}
