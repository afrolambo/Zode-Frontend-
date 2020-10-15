import React, {Component} from 'react';
import ZodiacList from '../components/ZodiacList'
import 'semantic-ui-css/semantic.min.css'



const Zodiac = ({ img, zodiac}) => {    
      return (
        <div>
          <ZodiacList signs={zodiac} img={img} />
        </div>
      );
}
  

  export default Zodiac