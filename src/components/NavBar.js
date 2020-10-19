import React from 'react';
import { NavLink} from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react'

class NavBar extends React.Component{
  state = { activeItem: 'Home'}

  handleItemClick = (e, {name} ) => {
    this.setState({ activeItem: name })
  }

  render(props) {

    const {activeItem} = this.state
    console.log(this.props.id)

      return (
        <Container>
          <Menu className="ui inverted segment">
              <Menu.Item 
              as={NavLink} to="/"
              name = 'Home'
              active={activeItem === 'Home'}
              onClick={this.handleItemClick}
              />

              {/* <NavLink className="item" className="navLink" to="/">
                <h3 >Home</h3> 
              </NavLink> */}

              <Menu.Item 
              as={NavLink} to="/zodiac"
              name = 'Zodiac'
              active={activeItem === 'Zodiac'}
              onClick={this.handleItemClick}
              />

              {/* <NavLink className="item" className="navLink" to="/zodiac">
                <h3 >Zodiac</h3>
              </NavLink> */}
              
              {this.props.user ? 
                <> 

                  <Menu.Item 
                    as={NavLink} to="/users"
                    name = 'Explore'
                    active={activeItem === 'Explore'}
                    onClick={this.handleItemClick}
                  />

                {/* <NavLink className="navLink" to="/users">
                    <h3 className="item">   Explore   </h3> 
                </NavLink> */}
              
                  <Menu.Item 
                    as={NavLink} to="/conversations"
                    name = 'Messages'
                    active={activeItem === 'Messages'}
                    onClick={this.handleItemClick}
                  />
                {/* <NavLink className="navLink" to="/conversations">Messages </NavLink> */}

                  <Menu.Item 
                    as={NavLink} to={`/users/${this.props.id}`}
                    name = 'MyProfile'
                    active={activeItem === 'MyProfile'}
                    onClick={this.handleItemClick}
                  >
                    <img className="profile_image" alt="" src={this.props.user.avatar} /> 
                  </Menu.Item>
                  {/* <Link to="/userProfile" className="item">
                    <img className="profile_image" alt="" src={this.props.user.avatar} />  
                  </Link> */}
                
                  <Menu.Item 
                    // as={NavLink} to="/conversations"
                    name = 'Logout'
                    active={activeItem === 'Logout'}
                    onClick={this.props.clickHandler}
                  />
              
                {/* <span onClick={this.props.clickHandler} className="navLink">Logout</span> */}
                </>
                :
                <>
                
                    <Menu.Item 
                      // as={NavLink} to="/userProfile"
                      name = 'MyProfile'
                      active={activeItem === 'MyProfile'}
                      // onClick={this.handleItemClick}
                    >
                      <img className="profile_image" alt="" src="https://i.pinimg.com/originals/0d/36/e7/0d36e7a476b06333d9fe9960572b66b9.jpg" /> 
                    </Menu.Item>
              
                {/* <div className="item">
                    <img className="profile_image"
                      alt=""
                      src="https://i.pinimg.com/originals/0d/36/e7/0d36e7a476b06333d9fe9960572b66b9.jpg"
                  />
                </div> */}
                </> 

              }
          </Menu>
        </Container>
      )
  }
  
}; 


export default NavBar;