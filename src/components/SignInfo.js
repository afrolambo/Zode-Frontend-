import React from 'react'
import {SUN} from '../constants'
import CompatibleSigns from './CompatibleSigns'
import { Link } from 'react-router-dom'
import { Container, Button, Form, Grid, Header, Image, Message, Segment, Row} from 'semantic-ui-react'


import 'semantic-ui-css/semantic.min.css'



class SignInfo extends React.Component {
    
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

   clickHandler = (e) => {
        this.forceUpdate()
   }
    
    render() {
        console.log(this.state)
        const sign = this.state.sign

        return (
            <Container>
            <Grid celled>
            <Grid.Row>
                <Grid.Column width={6}>
                    <Segment>
                        <h1>{sign.name}: {sign.symbol}</h1>

                        <div className="ui medium circular image"> 
                            <img src={sign.img} alt={sign.name}/> 
                        </div>

                        <h3>Dates: </h3>
                        <p>{sign.sun_dates}</p>


                        <p> Element: {sign.element}</p>

                        <p>Cardinality: {sign.cardinality} </p>

                        <h3>Ruling Planet:</h3>
                            <p>
                        {sign.ruling_planet}: <br/>
                            -  {sign.planet_info}</p>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={10}>
                
                <Segment>
                    <h1>About:</h1>
                    <p>{sign.about}</p>
                    <h1>Motto: </h1>
                    <p>{sign.motto}</p>
                    <h1>Secret Wish: </h1>
                    <p>{sign.secret_wish}</p>
                    <br/>
                </Segment>
                
                
                <Segment textAlign="center">
                    <h1>Traits</h1>
                    <Grid textAlign="left">
                    <Grid.Column width={8}>
                        <h3>The Good</h3>
                        <ul>

                            {sign.good_traits? 
                                sign.good_traits.map((good, index) => (
                                    <li key={index}>{good}</li>
                                ))
                            :
                                "loading..."
                            }
                        </ul>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <h3>The Naughty</h3>
                        <ul>
                            {sign.bad_traits? 
                                sign.bad_traits.map((bad, index) => (
                                    <li key={index}>{bad}</li>
                                ))
                            :
                                "loading..."
                            }
                        </ul>
                    </Grid.Column>
                    </Grid>
                </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row >
    
                    <Grid.Column width={8}>
                    <Segment>
                        <h3>Likes</h3>
                        <ul>

                            {sign.likes? 
                                sign.likes.map((like, index) => (
                                    <li key={index}>{like}</li>
                                ))
                            :
                                "loading..."
                            }
                        </ul>
                    </Segment>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Segment>
                        <h3>Dislikes</h3>
                        <ul>
                            {sign.dislikes? 
                                sign.dislikes.map((dislike, index) => (
                                    <li key={index}>{dislike}</li>
                                ))
                            :
                                "loading..."
                            }
                        </ul>
                        </Segment>
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