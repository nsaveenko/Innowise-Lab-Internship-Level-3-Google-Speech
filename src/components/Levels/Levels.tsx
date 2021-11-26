import React from 'react';
import { ILevels } from './ILevels';
import './Levels.css';

const Levels = ({ setActiveLevel }: ILevels) => {
  const cls = ['level-item'];

  const handleChangeLevel = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as Element;
    // target.classList.add('active-level');
    setActiveLevel(Number(target.id));
  };

  return (
    <div className='levels-container'>
      <button onClick={handleChangeLevel} type='submit' id='1' className={cls.join(' ')}>1</button>
      <button onClick={handleChangeLevel} type='submit' id='2' className={cls.join(' ')}>2</button>
      <button onClick={handleChangeLevel} type='submit' id='3' className={cls.join(' ')}>3</button>
      <button onClick={handleChangeLevel} type='submit' id='4' className={cls.join(' ')}>4</button>
      <button onClick={handleChangeLevel} type='submit' id='5' className={cls.join(' ')}>5</button>
      <button onClick={handleChangeLevel} type='submit' id='6' className={cls.join(' ')}>6</button>
    </div>
  );
};
export default Levels;
