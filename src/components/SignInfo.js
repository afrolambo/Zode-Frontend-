import React from 'react'
import {SUN, SIGN_IMAGES} from '../constants'
import CompatibleSigns from './CompatibleSigns'
import { Link } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'



class SignInfo extends React.Component {
    
    state ={
        sign: {}, 
        compatibility: [],
        signs: SIGN_IMAGES
    
    }

    async componentDidMount(){
        const name = this.props.match.params.zodiacName
        fetch(`${SUN}/${name}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            sign: data, 
            compatibility: data.compatibility
        }))
    }

    findSign = () => {
        
        let sign = this.state.signs.find(sign => sign.name === this.state.sign.name)
        console.log(sign)
        return sign
        
    }

    compatibility = () => {
        // let compatibility = this.state.compatibility 
        // const pretzel = compatibility.forEach(pretz => {
        //     let sign = this.state.signs.find(sign => sign.name === pretz)
            
        // })
        // console.log()
        return this.state.compatibility.map((sign, index)=> <CompatibleSigns key={index} sign={sign} />)
    }
    
    render() {
        const image = this.findSign()
        const sign = this.state.sign
        const signs = this.state.signs
        // const compatibility = this.compatibility()
        console.log(this.state.compatibility)

        return (
            <div>
                <h1></h1>
                <div className="ui medium circular image"> 
                    {image ? <img src={image.img} alt={image.name}/> : "loading..." }
                </div>

                <h2>Element: {image ? image.element : "loading..."}</h2>
                <div>
                    <h2>Compatible Signs</h2>
                    {this.compatibility(signs)}

                </div>
                <button>Back to Signs</button>
            </div>
        )
    }
}

export default SignInfo