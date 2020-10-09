import React, {Component} from 'react';
import {connect} from 'react-redux';
import SignCard from '../components/SignCard'
import ZodiacList from '../components/ZodiacList'
import { fetchSigns } from '../actions/signActions'



class Zodiac extends Component {   
  
    componentDidMount(){
        console.log(this.props)
        this.props.fetchSigns()
        } 

    handleLoading = () => {
        console.log(this.props.loading)
        if(this.props.loading) {
          return <div>Loading...</div>
        } else {
          return <ZodiacList signNames={this.props.signs} />
        }
      }
  
    render() {
      console.log(this.props)
      return (
        <div>
          <h1>Signs</h1>
        {this.handleLoading()}
        </div>
      );
    }
}
  
  const mapStateToProps = state => {
      console.log(state)
      let signs = state.signReducer.signs.map(sign => {
          return sign
      })
    
      let signName = signs.map(sign => {
          return sign.name
      })
      console.log(signName)
    return {
      signs: signName, 
      loading: state.loading
    }
  }
  
  // const mapDispatchToProps = dispatch => {
//   return {
//     fetchSigns: () => dispatch(fetchSigns())
//   }
// }
  
  export default connect (mapStateToProps, {fetchSigns}) (Zodiac)