import React from 'react';
import { NavLink , } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react'


const NavBar = (props) => {
  return (
    <Container>
      <Menu className="ui top menu">
          <NavLink className="navLink" to="/">Home </NavLink>
          <NavLink className="navLink" to="/zodiac">Zodiac </NavLink>
          
          {props.user ? 
            <> 
              <span onClick={props.clickHandler} className="navLink">Logout</span>

              <div className="item">
                <img className="profile_image"
                    alt=""
                    src={props.user.avatar}
                    // onClick={goToHome}
                />  
              </div>
            </>:
            <>
            <NavLink className="navLink" to="/login">Login </NavLink>
            <NavLink className="navLink" to="/signup">Create Account</NavLink>
            </> 

          }



      
      </Menu>
    </Container>
  );
};

export default NavBar;