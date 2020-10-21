import React from 'react';
import SignCard from '../components/SignCard'
import {SIGN_IMAGES} from '../constants'
import { Container, Button, Form, Grid, Header, Image, Message, Segment, Row} from 'semantic-ui-react'


class Zodiac extends React.Component {    

  state = {
    signs: SIGN_IMAGES
  }

  listSigns = () => {
    return this.state.signs.map(
        (sign, index) => <SignCard 
        key={index} sign={sign} 
        /> )
}

  render(){
    const signs = this.listSigns()
      return (
        <Container >
            <br/>
            <Header as='h2' inverted textAlign='center' >Sun Signs</Header>
          <Grid style={{ height: `100vh` }} columns={4} >

              {/* <div className="ui grid"> */}

                {signs}



              {/* </div> */}

          </Grid> 



        </Container>
      );}
}
  

  export default Zodiac