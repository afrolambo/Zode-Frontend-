import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react'


const NavBar = (props) => {
    let history = useHistory()
  return (
    <Container>
      <Menu className="ui top menu">
          <NavLink className="navLink" to="/">Home </NavLink>
          
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
            <div className="item">
                <img className="profile_image"
                  alt=""
                  src="https://i.pinimg.com/originals/0d/36/e7/0d36e7a476b06333d9fe9960572b66b9.jpg"
                  onClick={history.push('/')}
              />
            </div>
            </> 

          }



      
      </Menu>
    </Container>
  );
};

export default NavBar;