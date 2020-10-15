import React, {Component} from 'react'

class RoomWebSocket extends Component {

    componentDidMount() {
        this.props.getRoomData(window.location.href.match(/\d+$/)[0])
        this.props.cableApp.conversation = this.props.cableApp.cable.subscriptions.create({
            channel: 'ConversationsChannel', 
            conversation: window.location.href.match(/\d+$/)[0]
        }, 
        {
            received: (updatedConversation) => {
                this.props.updateApp(updatedConversation)
            }
        })
    }
    render() {
        return (
            <div></div>
        )
    }
}

export default RoomWebSocket