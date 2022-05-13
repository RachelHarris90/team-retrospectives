import './Board.css';
import React, { Component, useState } from 'react';
import { useMutation } from '@apollo/client';
import Modal from '../components/Modal';

import { ADD_ITEM } from '../utils/mutations';


class Board extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  
  render() {
    return (
      <main className="board-container">
        <div className="board-header">
          <h2>Traditional retrospective</h2>
          <Modal 
            show={this.state.show} 
            handleClose={this.hideModal} 
            handleSave={this.hideModal}>
          </Modal>
          <button type="button" onClick={this.showModal}>
            + Add thoughts
          </button>
        </div>
        <div className='sections'>
          <div className='section'>
              <h3 className='section-heading'>What went well?</h3>
              <div className='section-area'></div>
          </div>
          <div className='section'>
              <h3 className='section-heading'>What didn't go well?</h3>
              <div className='section-area'></div>
          </div>
          <div className='section'>
              <h3 className='section-heading'>What confuses you?</h3>
              <div className='section-area'></div>
          </div>
        </div> 
      </main>
    );
  };
}

export default Board;