import React from 'react'
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import {SIGN_IMAGES} from '../constants'

class CompatibleSigns extends React.Component{

    
    image = () => {
        let image = SIGN_IMAGES.find(image => image.name === this.props.sign)
       return image
    }  

    clickHandler = (e) => {
        console.log(e)
    }
    
    render(){
        const image = this.image()
        
        return(
            <>
                <h4> {this.props.sign} </h4>
                {image ?
                    <Link to={`/zodiac/${image.id}`} >
                        <img  className="ui tiny circular image" src={image.img} alt={image.name} /> 
                    </Link>
                    : "loading..."
                }
            </>
        )
    }
}

export default CompatibleSigns