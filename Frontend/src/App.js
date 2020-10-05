import React, { useEffect } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';

function App() {

  useEffect(() => {
    const pusher = new Pusher('dbb968f748401ec8df3f', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
    });
  },[])

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div> 
    </div>
  );
}

export default App;
