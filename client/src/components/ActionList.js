import './ActionList.css'
import '../index.css'

import React from 'react';

import { useMutation } from '@apollo/client';
import { REMOVE_ACTION } from '../utils/mutations';

import { useQuery } from '@apollo/client';
import { QUERY_ACTIONS } from '../utils/queries'

const ActionList = () => {

    const { data } = useQuery(QUERY_ACTIONS);
    const actions = data?.actions || [];

    const [removeAction, { error }] = useMutation(REMOVE_ACTION)
    const handleRemoveAction = async (id) => {
        try {
            const { event } = await removeAction({
                variables: { actionId: id },
            });

            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <main>
            <div>
                <h3>Actions</h3>
                <ul className="actions-list">
                    {actions &&
                    actions.map((actions) => (
                    <li key={actions._id}
                        className="action-list-item"
                        >
                        <p className="action-text">
                            {actions.text}
                        </p>
                        <p className="assignee-tag">
                            {actions.assignee}
                        </p>
                        <button className="deleteButton"
                            name="actionId"
                            value={actions._id}
                            onClick={() => handleRemoveAction(actions._id)} >
                            x
                        </button>
                    </li>
                    ))}
                </ul>
            </div>
        </main>
    );

}

export default ActionList;