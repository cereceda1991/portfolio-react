import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './styles/ChatApp.css';
import { HiChatAlt2, HiOutlineX } from 'react-icons/hi';
import { FiSend} from "react-icons/fi";

const ChatApp = ({chat}) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [isNameSet, setIsNameSet] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('https://backportfolio.up.railway.app', {
      transports: ['websocket'],
      reconnection: true,
    });

    newSocket.on('connect', () => {
      console.log('Conectado al servidor');
      setSocket(newSocket);
      newSocket.on('newNotification', (notification) => {
        setMessages((prevMessages) => [...prevMessages, notification]);
      });
    });

    newSocket.on('disconnect', () => {
      console.log('Desconectado del servidor');
    });

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, []);

  const handleNameSubmit = () => {
    if (senderName.trim() !== '' && socket && socket.connected) {
      setIsNameSet(true);
      sendSystemNotification(`${senderName} ${chat.MessageSystem}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }
  
  const sendSystemNotification = (message) => {
    socket.emit('notification', {
      message,
      senderName: 'Sistema',
    });
  };

  const sendMessage = () => {
    if (inputMessage.trim() !== '' && socket && socket.connected) {
      const newMessage = {
        message: inputMessage,
        senderName,
      };

      socket.emit('notification', newMessage);
      setInputMessage('');
    }
  };

  const toggleChat = () => {
    setIsChatOpen((prevIsChatOpen) => !prevIsChatOpen);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="chat-container">
      {!isChatOpen ? (
        <button onClick={toggleChat} className="open-chat-button">
          <HiChatAlt2 />
        </button>
      ) : (
        <div className="chat-open">
          <button onClick={closeChat} className="close-chat-button">
            <HiOutlineX />
          </button>
          {!isNameSet ? (
            <div className="name-input">
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder={chat.contentMessageInit}
                className="name-input__input"
                onKeyDown ={handleKeyDown}
              />
              <button onClick={handleNameSubmit} className="name-input__button">
            {chat.buttonInit}
              </button>
            </div>
          ) : (
            <div className="chat-content">
              <div className="message-list">
                {messages.map(({ senderName, message }, index) => (
                  <div key={index} className="message-item">
                    <strong>{senderName}: </strong>
                    {message}
                  </div>
                ))}
              </div>
              <div className="input-area">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={chat.contentInput}
                  className="input-area__input"
                  onKeyDown ={handleKeyDown}
                />
                <button onClick={sendMessage} className="input-area__button">
                  <SendIcon />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const SendIcon = () => <FiSend/>;

export default ChatApp;
