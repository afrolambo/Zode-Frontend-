import React from 'react'
import { withRouter } from 'react-router-dom'
import SignInfo from './SignInfo'

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
        <div>
            <h3>{name}</h3>
            <div><img src={image.img} onClick={this.handleClick}/></div>
        </div>
    )}
}

export default withRouter(SignCard)