import React from 'react'
import "./Message.css";
import { Avatar } from '@material-ui/core';

function Message() {
  return (
    <div className='message'>
        <Avatar />
        <div className='message_info'>
            <h4>
                JW4gg
                <span className='message_timestamp'>test message_timestamp</span>
            </h4>
            <p>test message</p>
        </div>
    </div>
  )
}

export default Message