import React, { useState } from 'react'

import { socket } from '../services/socket';

const Inputs = () => {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (message === '') return;
    socket.emit('send', {
      username,
      message,
    })
    setMessage('');
    setUsername('');
  }

  return ( 
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          id="username"
          value={username}
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usúario"
        />
        <input
          id="message" 
          value={message}
          type="text"
          autoComplete="off"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Coloque aqui sua mensa"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Inputs;
