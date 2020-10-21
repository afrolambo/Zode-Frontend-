import React from 'react'
import { Link } from 'react-router-dom'
import {SIGN_IMAGES} from '../constants'
import { Popup} from 'semantic-ui-react'


class CompatibleSigns extends React.Component{

    image = () => {
        let image = SIGN_IMAGES.find(image => image.name === this.props.sign)
       return image
    }  
    
    render(){
        const image = this.image()
        const style = {
            opacity: 0.7,
          }
        
        return(
            <>
                {image ?
                    <Popup
                        trigger={ <Link to={{
                                    pathname: `/zodiac/${image.id}`, 
                                    signId: image.id
                                    }} onClick={this.props.clickHandler}>
                                    <img  className="ui tiny circular image" src={image.img} alt={image.name} id={image.id}/> 
                                </Link>
                        }
                        style={style}
                        content={`${this.props.sign}`}
                        position="right center"
                    />
                    : 
                    "loading..."
                }
            </>
        )
    }
}

export default CompatibleSigns