import './ActionForm.css'
import '../index.css'

import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_ACTION } from '../utils/mutations';

import { useQuery } from '@apollo/client';
import { QUERY_ACTIONS } from '../utils/queries'

const ActionsForm = () => {

    const { data } = useQuery(QUERY_ACTIONS);
    const actions = data?.actions || [];

    const [text, setText] = useState('');
    const [assignee, setAssignee] = useState('');
  
    const [addAction, { error }] = useMutation(ADD_ACTION);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await addAction({
          variables: { text, assignee },
        });
  
        window.location.reload();
      } catch (err) {
        console.error(err);
      }
    };

    const handleCancel = () => {
        setText('');
        setAssignee('');
    }

    return (
        <main>
            <form onSubmit={handleFormSubmit}>
                <h3>Create new action</h3>
                <label>
                    Action
                </label>
                <textarea className="action-field"
                    label="Action"
                    name="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    rows="4"
                    cols="50"
                >
                </textarea>
                <label>
                    Assignee
                </label>
                <input className="assignee-field"
                    label="Assignee"
                    name="assignee"
                    value={assignee}
                    onChange={(event) => setAssignee(event.target.value)}
                >
                </input>
                <div className="action-buttons">
                    <button type="submit" className="button-save">
                        Save
                    </button>
                    <button 
                        type="button" 
                        className="button-close"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </main>
    );

}

export default ActionsForm;