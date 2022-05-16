import React, { Component } from 'react';

import Modal from './Modal';


class AddModal extends Component {
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
      <main className="add-modal-container">
          <Modal 
            show={this.state.show} 
            handleClose={this.hideModal} 
            handleSave={this.hideModal}>
          </Modal>
          <button type="button" onClick={this.showModal}>
            + Add thoughts
          </button>
      </main>
    );
  };
}

export default AddModal;