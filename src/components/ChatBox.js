import React, { useState } from 'react';
import Message from './Message';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import './ChatBox.css';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const sendMessage = () => {
    if (input.trim() !== '') {
      const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = { text: input, user: randomUser, likes: 0 };
      setMessages([...messages, newMessage]);
      setInput('');
      setShowEmojiPicker(false);
    }
  };

  const addEmoji = (emoji) => {
    setInput(input + emoji.native);
    setShowEmojiPicker(false);
  };

  const likeMessage = (index) => {
    const newMessages = [...messages];
    newMessages[index].likes += 1;
    setMessages(newMessages);
  };

  return (
    <div className="chat-box">

<div className="top-section">
        <div className="left-content">
          <h3>Introductions</h3>
          <p>This channel is for company wide chatter</p>
        </div>
        <div className="right-content">
          <button className="contacts-icon">
            <img src="https://icons.veryicon.com/png/o/object/material_design/contacts-63.png" alt="Contacts" />
          </button>
        </div>
      </div>

      <div className="messages">
        {messages.map((message, index) => (
          <Message
            key={index}
            message={message}
            likeMessage={() => likeMessage(index)}
          />
        ))}
      </div>
      <div className="input-section">
        <div className="input-wrapper">
        <input
          className="inputbox-size"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Hi all! New messages here..."
        />
                <button 
          className="emoji-button"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          😊
        </button>
        </div>

        <button onClick={sendMessage}>Send</button>

        {showEmojiPicker && (
          <div className="emoji-picker">
            <Picker data={data} onEmojiSelect={addEmoji} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
