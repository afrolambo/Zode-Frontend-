import React, { Component } from 'react'




class Messenger extends Component {








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

        return (
            <div> 
                Hello
            </div>
        )
    }
}

export default Messenger