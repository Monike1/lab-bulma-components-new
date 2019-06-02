import React from 'react';

const MessageBody = (props) => {
  return (
    <div className="message-body">
      {props.children}
    </div>
  )
}

export default MessageBody;