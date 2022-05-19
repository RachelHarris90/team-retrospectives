import '../index.css'

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

import Auth from '../utils/auth';

const Home = () => {

  return (
    <main>
      <div className="sections">
         <div className="container login-signup-container">
            <h3>
                Login or sign up
            </h3>
            <button className="nav-item">
                <Link to='/login' className="nav-link">
                    Login
                </Link>
            </button>
            <button className="nav-item">
                <Link to='/signup' className="nav-link">
                    Signup
                </Link>
            </button>
        </div>
        <div className="container ">
          <div>
            <h3>Prime directive</h3>
            <p>
            "Regardless of what we discover, we understand and truly believe that everyone did the best job they could, given what they knew at the time, their skills and abilities, the resources available, and the situation at hand."<br></br>
            <br>
            </br>
            --Norm Kerth, Project Retrospectives: A Handbook for Team Review
            </p>
          </div>
          </div>
      </div>
    </main>
  );
};

export default Home;
