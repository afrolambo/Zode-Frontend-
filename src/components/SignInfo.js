import React from 'react'
import {SUN} from '../constants'
import CompatibleSigns from './CompatibleSigns'
import { Link } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'



class SignInfo extends React.Component {
    
    state ={
        sign: {}, 
        compatibility: [],
    }

    async componentDidMount(){
        const id = this.props.match.params.id
        fetch(`${SUN}/${id}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            sign: data, 
            compatibility: data.compatibility
        }))
    }

    compatibility = () => {
        return this.state.compatibility.map((sign, index)=> <CompatibleSigns key={index} sign={sign}  />) 
    }

    likes = () => {

    }
    
    render() {
        const sign = this.state.sign

        return (
            <div>
                <div>
                    <h1>{sign.name}: {sign.symbol}</h1>

                    <div className="ui medium circular image"> 
                        <img src={sign.img} alt={sign.name}/> 
                    </div>
                    <h3>{sign.sun_dates}</h3>

                    <h2>Element: {sign.element}</h2>
                    <h2>Cardinality: {sign.cardinality} </h2> 
                    <h3>Ruling Planet: {sign.ruling_planet}: <br/>
                        {sign.planet_info}</h3>

                </div>

                <div>
                    <h2>About:</h2>
                    <p>{sign.about}</p>
                    <h3>Motto: </h3>
                    <div>{sign.motto}</div>
                    <h3>Secret Wish: </h3>
                    <div>{sign.secret_wish}</div>
                    <br/>
                </div>

                <div>
                    <h3>Traits</h3>
                    <div>
                        <h4>The Good</h4>
                        <ul>

                            {sign.good_traits? 
                                sign.good_traits.map((good, index) => (
                                    <li key={index}>{good}</li>
                                ))
                            :
                                "loading..."
                            }
                        </ul>
                    </div>
                    <div>
                        <h4>The Naughty</h4>
                        <ul>
                            {sign.bad_traits? 
                                sign.bad_traits.map((bad, index) => (
                                    <li key={index}>{bad}</li>
                                ))
                            :
                                "loading..."
                            }
                        </ul>
                    </div>
                </div>

                <div>
                    <h3>Likes and Dislikes</h3>
                    <div>
                        <h4>Likes</h4>
                        <ul>

                            {sign.likes? 
                                sign.likes.map((like, index) => (
                                    <li key={index}>{like}</li>
                                ))
                            :
                                "loading..."
                            }
                        </ul>
                    </div>
                    <div>
                        <h4>Dislikes</h4>
                        <ul>
                            {sign.dislikes? 
                                sign.dislikes.map((dislike, index) => (
                                    <li key={index}>{dislike}</li>
                                ))
                            :
                                "loading..."
                            }
                        </ul>
                    </div>
                </div>

               
                <div>
                    <h2>Compatible Signs</h2>
                   {this.compatibility()} 

                </div>
                <Link to={`/zodiac`}>
                    <button>Back to Signs</button>
                </Link>
            </div>
        )
    }
}

export default SignInfo