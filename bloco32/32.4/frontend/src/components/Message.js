import React from 'react';

export default function Message({ username, message }) {
  return (
    <article className="message-container">
      <header>
        <strong>{username}</strong>
      </header>
      <p>{message}</p>
    </article>
  );
}
