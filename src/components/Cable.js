import React from 'react'
import {ActionCable} from 'react-actioncable-provider'

const Cable = ({ conversations, handleReceivedMessage }) => {
    return (
        <>
        {conversations.map(conversation => {
            return (
                <ActionCable 
                    key={conversation.id}
                    channel={{ channel: 'MessagesChannel', conversation: conversation.id }}
                    onReceived={handleReceivedMessage}
                />
            )
        })}
        </>
    )
}

export default Cable