import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://lh3.googleusercontent.com/-M8HsXEBYK_E/W9gBjrhAb_I/AAAAAAAAA3w/IAQaUwPy4y043es3ZDiE9g1pIaGwWYf2QCEwYBhgLKtMDAL1OcqwotLS8I9TE1vgLyi5nL5s-75KIDgnO3t9P8aiqhyO6e7K_BE5I_3Yk4JtwCEzAmNGx_ap369GG_9OMPOcSHQKPpCYPTolSVs5rYZwfOa1B7eFOno8Jd2IvBLJ-igKUR_kihhNWwngUbYUcEqvdIeoCXrl_G3cZLOEdHUyQcAd-27XxZq01BDhcjuUxFzfGpG61xGstPIHA4483XBhtpaVMrDVA0c1JTNABBuK5BljRmkwCNaipdb7JDNc2d_J4ZAWEbdP-n-zeZSc6mM5O4uT8B3WqJJRLPh4-tziIXJR33xG2eEerqS4eYQgQkWels6Xf0S_e_lMLW2iL6q8CM4VxC733lBllO4GPIzPm2WzsCc-f1BxULtY_TmVIS6l4xaok6IyBz2lE1RI8HqUbZXZQevuX-UN8-zY3m_OSk_6sLEj_U66wkc669HszZoGyZGVy068a9LflM5VPSg31mooRYqYdgoB6hGSFNLcACliSvXG5pyxeS3HQBPnjbZ3as49G-9foQeDG7rr-6xYEF5GH3LmOdt7iPMijcAGem4R1_G-ucmP3tFzgmFZ9z4TUDcbVLgChRaXtOdixTRvPq6aEpeIvhYKg8feLYbFIXzsw64Ln-wU/w140-h140-p/4e7b17cb-ac87-4838-a2bb-72f897b7db76"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                

            </div>
            <div className="sidebar__search">
                    <div className="sidebar__searchContainer">
                        <SearchOutlined />
                        <input type="text" placeholder="Search or start a new chat"/>
                    </div>
                </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}
