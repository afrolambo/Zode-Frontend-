import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import {SIGN_IMAGES} from '../constants'

const FollowButton = ({
    children, type, onClick, 
}) => {

        
        return(
            <>
                <button onClick={onClick} type={type}>
                    {children}
                </button>
            </>
        )
}

export default FollowButton