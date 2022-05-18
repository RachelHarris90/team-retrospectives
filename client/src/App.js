import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.js';
import Profile from './pages/Profile';
import BoardList from './pages/BoardList.js';
import Board from './pages/Board.js';
import Signup from './pages/Signup.js';
import Login from './pages/Login.js';
import Actions from './pages/Actions.js';
import LoggedOut from './pages/LoggedOut';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <header>
            <Header />
          </header>
          <Routes>
            <Route 
                path='/signup'
                element={<Signup />}
              />
              <Route 
                path='/login'
                element={<Login />}
              />
              <Route 
                path="/me" 
                element={<Profile />}
              />
              <Route 
                path="/profiles/:profileId"
                element={<Profile />}
              />
              <Route 
                  path="/" 
                  element={<Board />} 
              />
              <Route 
                  path="/actions" 
                  element={<Actions />} 
              />
              <Route 
                  path="/loggedOut" 
                  element={<LoggedOut />} 
              />
          </Routes>
        </div>
        </Router>
    </ApolloProvider>
  );
}

export default App;
