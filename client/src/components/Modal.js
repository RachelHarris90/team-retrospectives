import './Modal.css';
import '../index.css'

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_ITEM } from '../utils/mutations';

const Modal = ({ handleClose, handleSave, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  const [addItem, { error }] = useMutation(ADD_ITEM);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addItem({
        variables: { text, category },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <h3>Your thoughts</h3>
        <form onSubmit={handleFormSubmit}>
          <label>Category</label>
          <select
            name="category"
            defaultValue={"default"}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="default" disabled>
              Select a category... 
            </option>
            <option value="01">What went well?</option>
            <option value="02">What didn't go well?</option>
            <option value="03">What confuses you?</option>
          </select>
          <textarea className="thought-text-area"
            name="text"
            placeholder="Type your thoughts..."
            value={text}
            onChange={(event) => setText(event.target.value)}
            rows="4"
            cols="50"
          >
          </textarea>
          <div className="action-buttons">
            <button type="submit" className="button-save" onClick={handleSave}>
              Save
            </button>
            <button type="button" className="button-close" onClick={handleClose}>
              Cancel
            </button>
          </div>
          
        </form>
      </section>
    </div>
  );
};

export default Modal;