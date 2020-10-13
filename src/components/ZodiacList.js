import React from 'react';
import SignCard from './SignCard'
import SignInfo from './SignInfo'

class ZodiacList extends React.Component {
    state = {
        status: false,
        clicked: null
    }

    listSigns = () => {
        return this.props.signs.map(
            sign => <SignCard 
            key={sign.id} sign={sign} img={this.props.img} 
            info={this.state} clickHandler={this.findSignInfoHandler} 
            /> )
    }

    findSignInfoHandler = (clickedSign) => {
        this.setState({status: true, clicked: clickedSign})
    }

    backToAllSignsHandler = () => {
        this.setState({status: false, clicked: null})
    }

    render() {
        return(
            <div>
                {this.state.status === false ? 
                    <div>
                        <h1>Signs</h1>
                        {this.listSigns()}
                    </div>
                    :
                    <div>
                        <SignInfo name={this.state.clicked} 
                        clickHandler={this.backToAllSignsHandler}
                        signs={this.props.signs} img={this.props.img} 
                        />
                    </div>
                }
            </div>
            )

    }
}

export default ZodiacList