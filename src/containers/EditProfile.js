import React from 'react'
import EditForm from '../components/EditForm'

class EditProfile extends React.Component{

    state = {
        bio: ""
    }

    changeHandler = (e) => {
        const {name, value} = e.target 
        this.setState({ [name]: value })
    }

    submitHandler = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>Edit Bio</h1>
                <form onSubmit={handleSubmit}>
                    <label>Edit Bio
                        <br/>
                        <textarea name="bio" value={bio} onChange={this.changHandler} type="textBox" placeholder="tell us about yourself" />
                    </label>
                    <input type="submit" />
                </form>
                {/* <EditForm submitHandler={this.submitHandler} bio={this.state.bio} changeHandler={this.changeHandler} /> */}
            </div>
        )
    }

}

export default EditProfile