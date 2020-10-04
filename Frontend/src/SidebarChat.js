import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css' 

export default function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQGDPVBVftCdqg/profile-displayphoto-shrink_800_800/0?e=1607558400&v=beta&t=AY7BqvSIipjxZPpeJjsLyav-8HMHKnPo77gbsYc7OJk"/>
            <div className="sidebarChat__info">
                <h2>Anshul Bansal</h2>
                <p>Hi! there whatsapp</p>
            </div>
        </div>
    )
}
