import './Modal.css';
import React from 'react';

const Modal = ({ handleClose, handleSave, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <form>
          <h3>Your thoughts</h3>
          <select>
            <label>Category</label>
            <option value="01">What went well?</option>
            <option value="02">What didn't go well?</option>
            <option value="03">What confuses you?</option>
          </select>
          <textarea 
            name="textValue"
            rows="4"
            cols="50"
            // onChange={this.handleChange}
          >
          </textarea>
          
        </form>
        <button className="modal-button" type="button" onClick={handleSave}>
          Save
        </button>
        <button className="modal-button" type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;