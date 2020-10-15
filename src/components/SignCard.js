import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'

class SignCard extends React.Component {
    state = {
        clicked: false
    }
    findImg = () => {
        let image = this.props.img.find(img => this.props.sign.name == img.name)
        return image
    }

    handleClick = (e) => {
        this.props.clickHandler(this.props.sign.name)
    }
    
    render() {
        let image = this.findImg()
        let name = this.props.sign.name
        return (
        <div className="four wide column">
            <h3>{name}</h3>
           <Link to={`zodiac/${name.toLowerCase()}`}><div><img className="ui medium circular image" src={image.img} onClick={this.handleClick}/></div></Link> 
        </div>
    )}
}

export default SignCard