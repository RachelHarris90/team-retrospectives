import './Board.css';
import '../index.css'

import React from 'react';

import AddModal from '../components/AddModal';
import ActionList from '../components/ActionList'
import ActionForm from '../components/ActionForm'

import { useMutation } from '@apollo/client';
import { REMOVE_ITEM } from '../utils/mutations';

import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../utils/queries';

const Board = () => {
  // Get items from db
  const { data } = useQuery(QUERY_ITEMS);
  // If there are no items, return empty array
  const items = data?.items || [];

  // Use mutation to remove item using it's ID
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
  
  // Filter the items based on category to populate relevent sections
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
  
  // Display retro board, with sections and corresponding items
    return (
      <main className="board">
        <div className="container">
          <div className="container-header">
            <h2>Sprint 3 retrospective</h2>
            <div className="aside-components">
            <AddModal />
          </div>
          </div>
          <div className="sections">
            <div className="section">
                <h3 className="section-heading">What went well?</h3>
                <div className="section-area">
                  <ul className="item-card-list">
                    {filterCat01().map((items) => (
                      <li className="item-card"
                        key={items._id}
                      >{items.text}
                        <button className="deleteButton"
                          name="itemId"
                          value={items._id}
                          onClick={() => handleRemoveItem(items._id)} >
                          x
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
            <div className="section">
                <h3 className="section-heading">What didn't go well?</h3>
                <div className="section-area">
                <ul className="item-card-list">
                    {filterCat02().map((items) => (
                      <li className="item-card"
                      key={items._id}
                    >{items.text}
                      <button className="deleteButton"
                          name="itemId"
                          value={items._id}
                          onClick={() => handleRemoveItem(items._id)} >
                          x
                        </button>
                    </li>
                    ))}
                  </ul>
                </div>
            </div>
            <div className="section">
                <h3 className="section-heading">What confuses you?</h3>
                <div className="section-area">
                  <ul className="item-card-list">
                    {filterCat03().map((items) => (
                      <li className="item-card"
                      key={items._id}
                    >{items.text}
                      <button className="deleteButton"
                          name="itemId"
                          value={items._id}
                          onClick={() => handleRemoveItem(items._id)} >
                          x
                        </button>
                    </li>
                    ))}
                  </ul>
                </div>
            </div>
          </div> 
        </div>
        <div>
          <ActionList />
          <ActionForm />
        </div>
      </main>
    );
  };

export default Board;