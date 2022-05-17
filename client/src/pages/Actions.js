import './Board.css';
import '../index.css'

import React from 'react';

import ActionForm from '../components/ActionForm';
import ActionList from '../components/ActionList'

const Actions = () => {

    return( 
        <main>
            <ActionList />
            <ActionForm />
        </main>
    )
}

export default Actions;