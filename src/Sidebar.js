import React from 'react';
import "./sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  return (
    <div className='sidebar'>
        <h2>I am the sidebar</h2>

        <div className='sidebar_top'>
            <h3>JW4GG's Server</h3>
            <ExpandMoreIcon />
        </div>

        

    </div>
  )
}

export default Sidebar