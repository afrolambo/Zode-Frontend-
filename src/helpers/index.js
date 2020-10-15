import React from 'react'

export const findActiveConversation = (conversations, activeConversation) => {
    return conversations.find(
      conversation => conversation.id === activeConversation
    );
  };
  
export const mapConversations = (conversations, handleClick) => {
    return conversations.map(conversation => {
      return (
        <li key={conversation.id} onClick={() => handleClick(conversation.id)}>
          {conversation.title}
        </li>
      );
    });
  };