import React from 'react';
import { API_ROOT, HEADERS } from '../constants';

class NewMessageForm extends React.Component {
    state = {
        content: '', 
        conversation_id: this.props.conversation_id 
    }

    // componentWillReceiveProps = nextProps => {
    //     this.setState({ conversation_id: nextProps.conversation_id })
    // }

    static getDerivedStateFromProps = (nextProps) => {
        this.setState({ conversation_id: nextProps.conversation_id})
    }

    handleChange = e => {
        this.setState({ content: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()

        fetch(`${API_ROOT}/messages`, {
            method: 'POST',
            headers: HEADERS, 
            body: JSON.stringify(this.state)
        })
        this.setState({ content: '' })
    }

    render = () => {
        return (
            <div className="newMessageForm">
                <form onSubmit={this.handleSubmit}>
                    <label>New Message:</label>
                    <br />
                    <input type="text" value={this.state.content} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default NewMessageForm