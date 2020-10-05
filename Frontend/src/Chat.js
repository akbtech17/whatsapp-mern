import React, { useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import './Chat.css'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';

export default function Chat({messages}) {

    const [inputText, setInputText] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/messages/new', {
            name: "DEMO APP",
            timestamp:"Just now!",
            message:inputText,
            recieved: true
        })
        setInputText('');
    } 

    
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${message.recieved && "chat__reciever"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">
                            {message.timestamp}
                        </span>
                    </p>
                ))}
                
            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input 
                        value={inputText}
                        type="text" 
                        placeholder="Type a message"
                        onChange = {e => setInputText(e.target.value)}
                    />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}
