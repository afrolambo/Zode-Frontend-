import React from 'react'

class Welcome extends React.Component {

    render() {
        return (
            <> 
                 {this.props.user ? 
                <>
                <h1> Welcome {this.props.user.username}</h1>

                </>
                :
                <>
                <h1> Welcome </h1>
                </>
                } 
                
            </>
        )
    }
}

export default Welcome