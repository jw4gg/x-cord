import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged in
      } else {
        //user is logged out
      }
    });
  }, []);

  return (
    <div className="app">
      {user ? (
        <>
        <Sidebar />
        <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
