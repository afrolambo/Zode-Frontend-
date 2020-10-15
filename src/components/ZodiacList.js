import React from 'react';
import SignCard from './SignCard'
import SignInfo from './SignInfo'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'

class ZodiacList extends React.Component {

    listSigns = () => {
        return this.props.signs.map(
            sign => <SignCard 
            key={sign.id} sign={sign} img={this.props.img} 
            info={this.state} clickHandler={this.findSignInfoHandler} 
            /> )
    }

    // const findImg = () => {
    //     let image = img.find(img => signs.name == img.name)
    //     return image
    // }

    // const linkSigns = signs.map((sign) => {
    //     return (
    //         <div className="four wide column">
    //             {findImg}
    //             <Link to={`zodiac/${sign.name}`}>{sign.name}</Link>
    //         </div>
    //     )
    // })

    findSignInfoHandler = (clickedSign) => {
        this.setState({status: true, clicked: clickedSign})
    }

    backToAllSignsHandler = () => {
        this.setState({status: false, clicked: null})
    }

    render() {
        return(
            <div>
                {/* {this.state.status === false ?  */}
                    <div>
                        <h1>Signs</h1>
                        
                        <div className="ui grid">
                        {this.listSigns()}
                        </div>
                    </div>
                    {/* : */}
                    {/* <div>
                        <SignInfo name={this.state.clicked} 
                        signs={this.props.signs} img={this.props.img} 
                        />
                    </div> */}
                {/* } */}
            </div>
            )

    }
}

export default ZodiacList