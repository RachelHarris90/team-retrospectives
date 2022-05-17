import './Board.css';
import React from 'react';

import AddModal from '../components/AddModal';

import { useMutation } from '@apollo/client';
import { REMOVE_ITEM } from '../utils/mutations';

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
  
  const [removeItem, { error }] = useMutation(REMOVE_ITEM)

  const handleRemoveItem = async (id) => {

    try {
      const { event } = await removeItem({
        variables: { itemId: id },
      });

      window.location.reload();

    } catch (err) {
      console.error(err);
    }
  };

    return (
      <main className="board-container">
        <div className="board-header">
          <h2>Sprint 3 retrospective</h2>
        </div>
        <div className="sections">
          <div className="section">
              <h3 className="section-heading">What went well?</h3>
              <div className="section-area">
                <ul>
                  {filterCat01().map((items) => (
                    <li className="item-card"
                      key={items._id}
                    >{items.text}
                      <button className="deleteButton"
                        name="itemId"
                        value={items._id}
                        onClick={() => handleRemoveItem(items._id)} >
                        ✗
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
          </div>
          <div className="section">
              <h3 className="section-heading">What didn't go well?</h3>
              <div className="section-area">
              <ul>
                  {filterCat02().map((items) => (
                    <li className="item-card"
                    key={items._id}
                  >{items.text}
                    <button className="deleteButton"
                      name="itemId"
                      value={items._id}
                      onClick={handleRemoveItem} >
                      ✗
                    </button>
                  </li>
                  ))}
                </ul>
              </div>
          </div>
          <div className="section">
              <h3 className="section-heading">What confuses you?</h3>
              <div className="section-area">
                <ul>
                  {filterCat03().map((items) => (
                    <li className="item-card"
                    key={items._id}
                  >{items.text}
                    <button className="deleteButton"
                      name="itemId"
                      value={items._id}
                      onClick={handleRemoveItem} >
                      ✗
                    </button>
                  </li>
                  ))}
                </ul>
              </div>
              <AddModal />
          </div>
        </div> 
      </main>
    );
  };

export default Board;