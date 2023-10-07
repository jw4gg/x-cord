import React from 'react';
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add"
import { Divider } from '@material-ui/core';
import SidebarChannel from './SidebarChannel';


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar_top'>
            <h3>JW4gg's Server</h3>
            <ExpandMoreIcon />
        </div>

        <div className='sidebar_channels'>
            <div className='sidebar_channelsHeader'>
                <div className='sidebar_header'>
                    <ExpandMoreIcon />
                    <h4>Text Channels</h4>
                </div>

                <AddIcon className='sidebar_addChannel'/>
            </div>
            <div className='sidebar_channelsList'>
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />

            </div>
        </div>
    </div>
  )
}

export default Sidebar