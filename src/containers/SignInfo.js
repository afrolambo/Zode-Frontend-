import React from 'react'
import {SUN} from '../constants'
import CompatibleSigns from '../components/CompatibleSigns'
import ElementModal from '../components/ElementModal'
import ModalityModal from '../components/ModalityModal'
import likes from '../PNG/likes.png'
import dislikes from '../PNG/dislikes.png'
import thegood from '../PNG/thegood.png'
import thenaughty from '../PNG/thenaughty.png'
import { Link } from 'react-router-dom'
import {SIGN_IMAGES} from '../constants/index'
import { Container, Button, Grid, Image} from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

class SignInfo extends React.Component {
    // export default function SignInfo
    state ={
        sign: {}, 
        compatibility: [],
        id: this.props.match.params.id
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
        return this.state.compatibility.map((sign, index)=> <CompatibleSigns key={index} sign={sign} clickHandler={this.clickHandler} />) 
    }

   clickHandler = (id) => {
    fetch(`${SUN}/${id}`)
    .then(resp => resp.json())
    .then(data => this.setState({
        sign: data, 
        compatibility: data.compatibility
    }))
   }
    
    render() {
        const sign = this.state.sign
        let element = "Element"
        let modality = "Modality"

        return (
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={6}>

                            <div>
                            <br />
                                <h1>{sign.name}: {sign.symbol}</h1>

                                <div className="ui medium circular image"> 
                                    <img src={sign.img} alt={sign.name}/> 
                                </div>

                                <h1>Dates: </h1>
                                <p className="about">{sign.sun_dates}</p>


                                <p className="about"> Element: <ElementModal sign={sign.name} obj={sign.element} type={element}>{sign.element}</ElementModal></p>
                                <div>


                                

                                <p className="about">Modality: <ModalityModal sign={sign.name} obj={sign.cardinality} type={modality}>{sign.cardinality}</ModalityModal> </p>
                                </div>

                                <h1>Ruling Planet:</h1>
                                <p className="about"> {sign.ruling_planet}: <br/>
                                -  {sign.planet_info}</p>
                            </div>

                        </Grid.Column>

                        <Grid.Column width={10}>
                
                            <Container>
                                <br/>
                                <h1>About:</h1>
                                <p className="about">{sign.about}</p>
                                <h1>Motto: </h1>
                                <p className="about">{sign.motto}</p>
                                <h1>Secret Wish: </h1>
                                <p className="about">{sign.secret_wish}</p>
                                <br/>
                            </Container>
                
                
                            <div className="App">
                                <h1>Traits</h1>

                                <Grid textAlign="left">
                                    <Grid.Column width={4}>
                                        <Image src={thenaughty} alt="thenaughty" />
                                    </Grid.Column>

                                    <Grid.Column width={4}>
                                        <ul className="about">
                                            {sign.bad_traits? 
                                                sign.bad_traits.map((bad, index) => (
                                                    <li key={index}>{bad}</li>
                                                ))
                                            :
                                                "loading..."
                                            }
                                        </ul>
                                    </Grid.Column>

                                    <Grid.Column width={4}>
                                        <Image src={thegood} alt="thegood" />
                                    </Grid.Column>

                                    <Grid.Column width={3}>
                                        <ul className="about">

                                            {sign.good_traits? 
                                                sign.good_traits.map((good, index) => (
                                                    <li key={index}>{good}</li>
                                                ))
                                            :
                                                "loading..."
                                            }
                                        </ul>
                                    </Grid.Column>
                                </Grid>

                            </div>

                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row >

                        <Grid.Column width={3}>
                            <Image src={likes} alt="likes" />
                        </Grid.Column>

                        <Grid.Column width={5}>

                            <div>
                                <br/>
                                <br/>
                                <ul className="about">

                                    {sign.likes? 
                                        sign.likes.map((like, index) => (
                                            <li key={index}>{like}</li>
                                        ))
                                    :
                                        "loading..."
                                    }
                                </ul>
                            </div>

                        </Grid.Column>

                        <Grid.Column width={3}>
                            <Image src={dislikes} alt="dislikes" />
                        </Grid.Column>

                        <Grid.Column width={4}>

                            <div>
                                <br/>
                                <br/>
                                <ul className="about">
                                    {sign.dislikes? 
                                        sign.dislikes.map((dislike, index) => (
                                            <li key={index}>{dislike}</li>
                                        ))
                                    :
                                        "loading..."
                                    }
                                </ul>
                            </div>

                        </Grid.Column>

                    </Grid.Row>

                </Grid>


               <div class="ui visible right sidebar">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div>
                        <h1>Compatible Signs</h1>
                    {this.compatibility()} 
                        <br />
                        <br />
                        <br />
                        <Link to={`/zodiac`}>
                            <Button size="large">Back to Signs</Button>
                        </Link>
                    </div>
               </div>
            </Container>
        )
    }
}

export default SignInfo
