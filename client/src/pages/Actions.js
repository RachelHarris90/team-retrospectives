import './Board.css';
import '../index.css'

import React from 'react';

import ActionForm from '../components/ActionForm';
import ActionList from '../components/ActionList'

const Actions = () => {

    return( 
        <main className="sections">
            <ActionForm />
            <div className="action-list-wide">
                <ActionList />
            </div>
        </main>
    )
}

export default Actions;