import React, {Component} from 'react'
import {HOROSCOPE} from '../constants'
import { Segment } from 'semantic-ui-react'

export default function HoroscopeContainer({ user }){

    // const findSign = () => {
    //     HOROSCOPE.find(sign => sign.name === user.sign)
    // }

    {
    let mySign = user.sign
    let sign = HOROSCOPE.find(sign => sign.name === mySign)
        return(
            <div>
                <h1>Hello {user.username} Welcome to Zodē</h1>
                <h2>Here's your weekly Horoscope:</h2>
                <Segment>
                    <Segment> <div className="horoscope">{sign.scope}</div> </Segment>
                </Segment>
            </div>
        )
    }
}