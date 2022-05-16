import './Board.css';
import React from 'react';

import AddModal from '../components/AddModal';

import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../utils/queries';

const Board = () => {
  const { data } = useQuery(QUERY_ITEMS);
  const items = data?.items || [];
  
  function filterCat01() {
    return items.filter(
      (items) => items.category === "01"
    )
  }

  function filterCat02() {
    return items.filter(
      (items) => items.category === "02"
    )
  }

  function filterCat03() {
    return items.filter(
      (items) => items.category === "03"
    )
  }

    return (
      <main className="board-container">
        <div className="board-header">
          <h2>Traditional retrospective</h2>
          <AddModal />
        </div>
        <div className='sections'>
          <div className='section'>
              <h3 className='section-heading'>What went well?</h3>
              <div className='section-area'>
                <ul>
                  {filterCat01().map((item) => (
                    <li key={item.id}>{item.text}</li>
                  ))}
                </ul>
              </div>
          </div>
          <div className='section'>
              <h3 className='section-heading'>What didn't go well?</h3>
              <div className='section-area'>
              <ul>
                  {filterCat02().map((item) => (
                    <li key={item.id}>{item.text}</li>
                  ))}
                </ul>
              </div>
          </div>
          <div className='section'>
              <h3 className='section-heading'>What confuses you?</h3>
              <div className='section-area'>
                <ul>
                  {filterCat03().map((item) => (
                    <li key={item.id}>{item.text}</li>
                  ))}
                </ul>
              </div>
          </div>
        </div> 
      </main>
    );
  };

export default Board;