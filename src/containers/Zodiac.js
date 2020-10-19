import React from 'react';
import SignCard from '../components/SignCard'
import {SIGN_IMAGES} from '../constants'
import 'semantic-ui-css/semantic.min.css'

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
        <>
          <br/>
          <div className="ui container">
            <h1 className="ui align center">Sun Signs</h1>
            <div className="ui grid">
              {signs}
            </div>
          </div>


        </>
      );}
}
  

  export default Zodiac