import './Modal.css';
import React from 'react';

const Modal = ({ handleClose, handleSave, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <h3>Your thoughts</h3>
        <div>
          <label>Category</label>
          <select>
            <option value="01">What went well?</option>
            <option value="02">What didn't go well?</option>
            <option value="03">What confuses you?</option>
          </select>
          <textarea 
            name="textValue"
            rows="4"
            cols="50"
          >
          </textarea>
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;