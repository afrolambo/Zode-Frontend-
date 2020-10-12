import React from 'react'

class UserProfile extends React.Component {

    render(props) {
        console.log(this.props)
        return(
            <>
            <h1>Welcome {this.props.user.first_name} </h1>
            </>
        )
    }
}

export default UserProfile