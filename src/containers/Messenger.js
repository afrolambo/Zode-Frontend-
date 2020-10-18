import React, { Component } from 'react'
// import RoomWebSocket from '../components/RoomWebSocket'
import {ActionCable} from 'react-actioncable-provider'
import { API_ROOT } from '../constants'
import NewConversationForm from '../components/NewConversationForm'
import MessagesArea from '../components/MessagesArea'
import Cable from '../components/Cable'
import ConversationsList from '../components/ConversationsList'
import { findActiveConversation, mapConversations } from '../helpers'


class Messenger extends Component {
    state = {
        conversations: [], 
        activeConversation: null 
    }

    componentDidMount = () => {
        const token = localStorage.getItem("token")
    if (token){
        fetch(`${API_ROOT}/conversations`, {
            method: 'GET', 
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        .then(resp => resp.json())
        .then(conversations => this.setState({conversations: conversations}))
        }
    }

    handleClick = id => {
        this.setState({ activeConversation: id })
    }

    // mapConversations = () => {
    //     return conversations.map(conversation => {
    //        <ConversationsList key={conversation.id} conversation.title={conversation} handleClick={this.handleClick}/>
    //     });
    //   };

    // mapConversations = (conversations, handleClick) => {
    //     return conversations.map(conversation => {
    //       return (
    //         <li key={conversation.id} onClick={() => handleClick(conversation.id)}>
    //           {conversation.title}
    //         </li>
    //       );
    //     });
    //   };

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
        // const { conversations, activeConversation } = this.state
        // const mapConversations = this.mapConversations
        console.log(this)
        
        //helpers

        // const findActiveConversation = (conversations, activeConversation) => {
        //     return conversations.find(
        //       conversation => conversation.id === activeConversation
        //     );
        //   };
          
        //   const mapConversations = (conversations, handleClick) => {
        //     return conversations.map(conversation => {
        //       return (
        //         <li key={conversation.id} onClick={() => handleClick(conversation.id)}>
        //           {conversation.title}
        //         </li>
        //       );
        //     });
        //   };

        return (
            <div className="conversationList">
                <ActionCable 
                    channel={{ channel: 'ConversationsChannel '}}
                    onReceived={this.handleReceivedConversation} 
                />
                {this.state.conversations.length ? (
                    <Cable 
                        // conversations={conversations}
                        handleReceivedMessage={this.handleReceivedMessage}
                    />
                ) : 
                <h1>Hello</h1> }
                <h2>Conversations</h2>
                {/* <ul>{mapConversations(conversations, this.handleClick)}</ul> */}
                <NewConversationForm />
                {/* {activeConversation ? (
                    <MessagesArea
                        conversation={findActiveConversation(
                            conversations, 
                            activeConversation
                        )}
                        />
                ) : 
                <h1>Hello</h1>} */}
            </div>
        )
    }
}

export default Messenger