import React from 'react'
import {SIGN_IMAGES} from '../constants'


class CompatibleCard extends React.Component {

    findImage = () => {
        
        let image = this.props.images.find(image => image.name === this.props.sign)
        return image
        
    }

    render(){
        const image = this.findImage()
        const sign = this.props.sign
        console.log(image)
        return(
            <>
                <h5>{sign}</h5>
                {image ? <img src={image.img} alt={image.name}/> : "loading..." }
            </>
        )
    }
}

export default CompatibleCard