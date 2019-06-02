import React from 'react';

const Message = (props) => {
  return (
    <div className="columns is-centered">
      <article className="message is-info column is-half">
        <div className="message-header">
          <p>{props.title}</p>
          <button className="delete" aria-label="delete">{props.children}</button>
        </div>
        <div className="message-body">
          {props.children}
        </div>
      </article>
    </div>
  )
}

export default Message;