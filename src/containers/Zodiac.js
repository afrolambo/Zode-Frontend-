import React, { useEffect, useState } from 'react';
import SignCard from '../components/SignCard'
import {SIGN_IMAGES} from '../constants'
import { Container, Grid, Header, Image} from 'semantic-ui-react'

export default function Zodiac({ img }){  
  const [signs, setSigns] = useState(SIGN_IMAGES)
    
  useEffect(() => {
    setSigns(SIGN_IMAGES)
  })

  const listSigns = () => {
    return signs.map((sign, index) => <SignCard key={index} sign={sign} />)
  }

  const allSigns = listSigns()
    
    return (
      <Container >
        <br/>
        <Header as='h2' inverted textAlign='center' >Sun Signs</Header>
        <Grid style={{ height: `100vh` }} columns={4} >
              {allSigns}
        </Grid> 
      </Container>
    );
}
