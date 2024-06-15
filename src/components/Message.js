import React from 'react';
import './Message.css';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const formatDate = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
};

const Message = ({ message, likeMessage }) => {
  const messageTime = new Date();
  return (
    <div className="message">
      <div className="message-header">
        <div
          className="user-circle"
          style={{ backgroundColor: getRandomColor() }}
        >
          {message.user.charAt(0)}
        </div>
        <span className="message-user">{message.user}</span>
        <span className="message-time">{formatDate(messageTime)}</span>
      </div>
      <div className="message-text-box">
        <span className="message-text">{message.text}</span>
      </div>
      <button onClick={likeMessage} className="like-button">
        👍 {message.likes}
      </button>
    </div>
  );
};

export default Message;
