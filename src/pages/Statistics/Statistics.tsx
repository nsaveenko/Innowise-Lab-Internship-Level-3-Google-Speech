import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../../hooks/useTypeSelector';
import Header from '../../components/Header/Header';
import { fetchStatistics } from '../../store/actions/statistics';
import './Statistics.css';
import { IStatistics } from '../../types/statistics';
import { INFO_MESSAGES } from '../../utils/messages';

const Statistics = () => {
  const { statistics, error, loading } = useTypedSelector((state) => state.statistics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatistics);
  }, []);

  if (error) {
    toast.error(error);
  }

  return (
    <>
      <Header />
      <main className='main'>
        <Toaster position='top-right' />
        {loading && <h3 className='info-message'>{INFO_MESSAGES.LOADING}</h3>}
        <ul className='statistics-list'>
          { statistics?.map((item: IStatistics) => {
            return (
              <li className='statistics-item' key={item.id}>
                <h2 className='statistics-title email'>{item.email}</h2>
                <h3 className='statistics-title'>
                  Score:
                  <span>
                    {item.score}
                  </span>
                </h3>
                <h3 className='statistics-title'>
                  Level:
                  <span>{item.level}</span>
                </h3>
                <h3 className='statistics-title'>
                  Number of correct and incorrect answers:
                  <span>
                    {item.countOfCorrectAnswers}
                    /
                    {item.countOfIncorrectAnswers}
                  </span>
                </h3>
                <h3 className='statistics-title'>
                  Game date:
                  <span>
                    {item.date}
                  </span>
                </h3>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Statistics;
