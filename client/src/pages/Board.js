import './Board.css';
import React, { Component, useState } from 'react';
import { useMutation } from '@apollo/client';
import Modal from '../components/Modal';

import { ADD_ITEM } from '../utils/mutations';

// const AddItem = (props) => {
//   const [formState, setFormState] = useState({ text: '', category: '' });
//   const [addItem, { error, data }] = useMutation(ADD_ITEM);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formState);
//     try {
//       const { data } = await addItem({
//         variables: { ...formState },
//       });

//     } catch (e) {
//       console.error(e);
//     }

//     setFormState({
//       text: '',
//       category: '',
//     });
//   };


const Board = () => {
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

// class Board extends Component {
//   constructor() {
//     super();
//     this.state = {
//       show: false
//     };
//     this.showModal = this.showModal.bind(this);
//     this.hideModal = this.hideModal.bind(this);
//   }

//   showModal = () => {
//     this.setState({ show: true });
//   };

//   hideModal = () => {
//     this.setState({ show: false });
//   };

  

    return (
      <main className="board-container">
        <div className="board-header">
          <h2>Traditional retrospective</h2>
          {/* <Modal 
            show={this.state.show} 
            handleClose={this.hideModal} 
            handleSave={this.hideModal}>
          </Modal> */}
          {/* <button type="button" onClick={this.showModal}>
            + Add thoughts
          </button> */}
        </div>
        <div className='sections'>
          <div className='section'>
              <h3 className='section-heading'>What went well?</h3>
              <div className='section-area'>
                {/* Remove text area and save button once tested functionality of saving to db */}
                <form onSubmit={handleFormSubmit}>
                  <input 
                    name="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                  />
                  <input 
                    name="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                  />
                  <button type="submit"> 
                    Save
                  </button>
                </form>
              </div>
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

export default Board
