import React from 'react'
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import {SIGN_IMAGES} from '../constants'

class CompatibleSigns extends React.Component{

    
    image = () => {
        let image = SIGN_IMAGES.find(image => image.name === this.props.sign)
       return image
    }  

    
    render(){
        const image = this.image()
        
        return(
            <>
                <h4> {this.props.sign} </h4>
                {image ?
                    <Link to={{
                        pathname: `/zodiac/${image.id}`, 
                        signId: image.id
                        }} onClick={this.props.clickHandler}>
                        <img  className="ui tiny circular image" src={image.img} alt={image.name} id={image.id}/> 
                    </Link>
                    : "loading..."
                }
            </>
        )
    }
}

export default CompatibleSigns