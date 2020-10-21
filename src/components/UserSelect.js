import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'
import { Container, Button, Form, Grid, Header, Image, Message, Segment, Row} from 'semantic-ui-react'


const UserSelect = ({user}) => {
    
    return (

            <div className="item">
                <img className="ui avatar image" src={user.avatar} />
                <div className="content">
               <Link to={`/users/${user.id}`} className="header"> {user.username} </Link>
               </div>
            </div>

    )
}

export default UserSelect