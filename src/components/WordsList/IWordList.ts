import React from 'react';

export interface IWordList {
  setImagePath?: React.Dispatch<React.SetStateAction<string>>;
  page: number;
}
