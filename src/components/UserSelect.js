import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'

const UserSelect = ({user, selectUser}) => {
    const clickHandler = () => {
        console.log("Clicked")
        selectUser(user)
    }
    return (
        <> 
            {/* <div onClick={clickHandler}> */}
            <div>
                <img className="ui avatar image" src={user.avatar} />
               <Link to={`/users/${user.id}`}> {user.username} </Link>
            </div>
        </>
    )
}

export default UserSelect