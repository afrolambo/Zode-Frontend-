import React, {Component} from 'react'
import {HOROSCOPE} from '../constants'
import { Segment } from 'semantic-ui-react'


class HoroscopeContainer extends Component{

    findSign = () => {
        HOROSCOPE.find(sign => sign.name === this.props.user.sign)
    }

    render() {
    let mySign = this.props.user.sign
    let sign = HOROSCOPE.find(sign => sign.name === mySign)
    console.log(sign)
        return(
            <div>
                <h1>Hello {this.props.user.username} Welcome to Zode</h1>
                <h2>Here's your weekly Horoscope:</h2>
                <Segment> <div className="horoscope">{sign.scope}</div> </Segment>
            </div>
        )
    }
}

export default HoroscopeContainer