import './Board.css';
import React, { Component } from 'react';

import Modal from '../components/Modal';

class Board extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.showModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };
    hideModal = () => {
        this.setState({ show: false });
    };
    render() {
        return (
            <div>
                <h1>Traditional retrospective</h1>
                <Modal 
                    show={this.state.show} 
                    handleSave={this.hideModal} 
                    handleClose={this.hideModal}>
                </Modal>
                <button type="button" onClick={this.showModal}>Add item</button>
                <div className="sections">
                    <div className="section">
                        <h2 className="section-heading">What went well?</h2>
                        <div className="section-area"></div>
                    </div>
                    <div className="section">
                        <h2 className="section-heading">What didn't go well?</h2>
                        <div className="section-area"></div>
                    </div>
                    <div className="section">
                        <h2 className="section-heading">What confuses you?</h2>
                        <div className="section-area"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;