import React, { useEffect, useState } from 'react';

import { socket } from './services/socket';

import Inputs from './components/Inputs';
import Message from './components/Message';

import './app.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('joined', (testemonials) => {
      setMessages(testemonials);
      setIsLoading(false);
    });

    socket.on('new-message', (messages) => setMessages(messages));
  }, []);

  return (
    <div className="container">
      <Inputs />
      {isLoading
        ? <p>Carregando</p>
        : messages.map(({username, message}, index) => <Message
          username={username}
          message={message}
          key={index}/>)
      }
    </div>
  );
}

export default App;
