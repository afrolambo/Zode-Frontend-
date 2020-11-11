import React from 'react'
import { Button } from 'semantic-ui-react'


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