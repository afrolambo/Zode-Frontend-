import React from 'react'
import CompatibleCard from './CompatibleCard'
import 'semantic-ui-css/semantic.min.css'
import {SIGN_IMAGES} from '../constants'

class CompatibleSigns extends React.Component{
// const CompatibleSigns = ({sign}) => { 
    // state = {
    //     signs: SIGN_IMAGES
    // }
    
    // info = () => {
    //    const image = () => this.state.signs.find(image => image.name === this.props.sign)
    //    return image
    // }

    // <CompatibleCard key={index} sign={sign} images={images} />   
    
    render(){
        console.log(this)
        
        return(
            <>
                <h4> {this.props.sign} </h4>
            </>
        )
    }
}

export default CompatibleSigns