import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import './Chat.css'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';

export default function Chat() {
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
                
            </div>
        </div>
    )
}
