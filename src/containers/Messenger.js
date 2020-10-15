import React, { Component } from 'react'
// import RoomWebSocket from '../components/RoomWebSocket'
import {ActionCable} from 'react-actioncable-provider'
import { API_ROOT } from '../constants'
import NewConversationForm from '../components/NewConversationForm'
import MessagesArea from '../components/MessagesArea'
import Cable from '../components/Cable'
import { findActiveConversation, mapConversations } from '../helpers'


class Messenger extends Component {
    state = {
        conversations: [], 
        activeConversation: null 
    }

    componentDidMount = () => {
        fetch(`${API_ROOT}/api/v1/conversations`)
        .then(resp => resp.json())
        .then(conversations => this.setState({conversations: conversations}))
    }

    handleClick = id => {
        this.setState({ activeConversation: id })
    }

    handleReceivedConversation = response => {
        const { conversation } = response;
        this.setState({
            conversations: [...this.state.conversations, conversation]
        })
    }

    handleReceivedMessage = response => {
        const {message} = response;
        const conversations = [...this.state.conversations];
        const conversation = conversations.find(
            conversation => conversation.id === message.conversation_id
        );
        conversation.messages = [...conversation.messages, message];
        this.setState({ conversations })
    }

    render() {
        const { conversations, activeConversation } = this.state
        
        //helpers

        const findActiveConversation = (conversations, activeConversation) => {
            return conversations.find(
              conversation => conversation.id === activeConversation
            );
          };
          
          const mapConversations = (conversations, handleClick) => {
            return conversations.map(conversation => {
              return (
                <li key={conversation.id} onClick={() => handleClick(conversation.id)}>
                  {conversation.title}
                </li>
              );
            });
          };

        return (
            <div className="conversationList">
                <ActionCable 
                    channel={{ channel: 'ConversationsChannel '}}
                    onReceived={this.handleReceivedConversation} 
                />
                {this.state.conversations.length ? (
                    <Cable 
                        conversations={conversations}
                        handleReceivedMessage={this.handleReceivedMessage}
                    />
                ) : 
                <h1>Hello</h1> }
                <h2>Conversations</h2>
                <ul>{mapConversations(conversations, this.handleClick)}</ul>
                <NewConversationForm />
                {activeConversation ? (
                    <MessagesArea
                        conversation={findActiveConversation(
                            conversations, 
                            activeConversation
                        )}
                        />
                ) : 
                <h1>Hello</h1>}
            </div>
        )
    }
}

export default Messenger