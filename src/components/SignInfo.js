import React from 'react'
import CompatibleSigns from './CompatibleSigns'

class SignInfo extends React.Component {
    
    handleClick = () => {
        this.props.clickHandler()
    }

    findSign = () => {
        let sign = this.props.signs.find(sign => this.props.name == sign.name)
        return sign 
    }
    findImg = () => {
        let image = this.props.img.find(img => this.props.name == img.name)
        return image
    }

    findCompatibleSigns = (sign) => {
        return sign.map(sign => <CompatibleSigns sign={sign} img={this.props.img}/>)
    }

    render() {
        let name = this.props.name
        let sign = this.findSign()
        console.log(sign)

        return (
            <div>
                <h1>{name} Info Page</h1>
                <h2>Element: {sign.element}</h2>
                <span>
                Compatible Signs: 
                {this.findCompatibleSigns(sign.compatibility)}
                </span>
                <button onClick={this.handleClick}>Back to Signs</button>
            </div>
        )
    }
}

export default SignInfo