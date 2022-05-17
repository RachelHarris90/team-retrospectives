import '../index.css'

import React, { useState } from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_BOARDS } from '../utils/queries';

import { useMutation } from '@apollo/client';
import { ADD_BOARD } from '../utils/mutations';


const BoardList = () => {
    const { data } = useQuery(QUERY_BOARDS);
    const boards = data?.boards || [];

    const [name, setName] = useState('');
  
    const [addBoard, { error }] = useMutation(ADD_BOARD);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await addBoard({
          variables: { name },
        });
  
        window.location.reload();
      } catch (err) {
        console.error(err);
      }
    };

    return(
        <main className="container">
            <div >
                <h2 className="container-header">Retrospectives</h2>
                <div className="sections">
                    <form onSubmit={handleFormSubmit}>
                        <input 
                            name="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        >
                        </input>
                        <button className="add-button" type="submit">
                            + Create board
                        </button>
                    </form>
                    <div className="listed-boards">
                        <h3>Your boards</h3>
                        <ul className="boards-list">
                            {boards &&
                            boards.map((boards) => (
                            <li key={boards._id}>
                                {boards.name}
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );

}

export default BoardList;