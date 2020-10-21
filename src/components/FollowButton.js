import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {SIGN_IMAGES} from '../constants'
import { Container, Grid, Image, Popup, Button, Form, Header, Message, Segment, Row } from 'semantic-ui-react'


const FollowButton = ({ children, type, onClick }) => {

        
        return(
            <>
                <Button size="large" alignText="center" onClick={onClick} type={type}>
                    {children}
                </Button>
            </>
        )
}

export default FollowButton