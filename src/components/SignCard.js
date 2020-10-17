import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'

class SignCard extends React.Component {

    
    render() {
        let image = this.props.sign
        let name = this.props.sign.name

        return (
        <div className="four wide column">
            <h2>{name}:</h2>

            <Link to={`zodiac/${image.id}`}>
                <div> 
                    <img className="ui medium circular image" 
                        src={image.img} alt={image.name} 
                    />
                </div>
            </Link> 
        </div>
        )
    }
}

export default SignCard