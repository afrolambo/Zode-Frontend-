import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'
import { Container, Button, Form, Grid, Header, Image, Message, Segment, Row} from 'semantic-ui-react'


const FollowerSelect = ({user, clickHandler}) => {
    const handleClick =(e)=> {

        clickHandler(user.id)
    }
    
    return (

            <div className="item">
                <img className="ui avatar image" src={user.avatar} />
                <div className="content">
               <Link to={`/users/${user.id}`} onClick={handleClick} className="header"> {user.username} </Link>
               </div>
            </div>

    )
}

export default FollowerSelect