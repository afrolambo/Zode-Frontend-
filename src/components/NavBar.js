import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react'

const NavBar = (props) => {
  
  return (
    <Container>
      <Menu className="ui top menu">
          <NavLink className="navLink" to="/">Home </NavLink>
          <NavLink className="navLink" to="/zodiac">Zodiac </NavLink>
          
          {props.user ? 
            <> 
            <NavLink className="navLink" to="/users">Explore </NavLink>
            <NavLink className="navLink" to="/conversations">Messages </NavLink>
            <span onClick={props.clickHandler} className="navLink">Logout</span>
              <Link to="/userProfile" className="item">
                <img className="profile_image" alt="" src={props.user.avatar} />  
              </Link>
            </>
            :
            <>
            <div className="item">
                <img className="profile_image"
                  alt=""
                  src="https://i.pinimg.com/originals/0d/36/e7/0d36e7a476b06333d9fe9960572b66b9.jpg"
              />
            </div>
            </> 

          }
      </Menu>
    </Container>
  )
};

export default NavBar;