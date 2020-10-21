import React from 'react';
import { NavLink} from 'react-router-dom';
import { Container, Menu, Visibility, Image } from 'semantic-ui-react'
import icon from '../PNG/icon.png'



class NavBar extends React.Component{
  state = { 
    activeItem: null, 
    menuFixed: false
  }

  handleItemClick = (e, {name} ) => {
    this.setState({ activeItem: name })
  }

  stickTopMenu = () => this.setState({menuFixed: true})
  render(props) {

    const {activeItem} = this.state
    console.log(this.props.id)

      return (
        <Container>
        
          <Menu size="huge" className="ui inverted segment" fixed>
              <Menu.Item 
                as={NavLink} 
                to="/" 
                name = 'ZodeIcon'
              >
                <img size="huge" className="profile_image" className="icon" alt="icon" src={icon} /> 
              </Menu.Item>

              <Menu.Item 
                as={NavLink} to="/"
                name = 'Home'
                active={activeItem === 'Home'}
                onClick={this.handleItemClick}
              />

              <Menu.Item 
                as={NavLink} to="/zodiac"
                name = 'Zodiac'
                active={activeItem === 'Zodiac'}
                onClick={this.handleItemClick}
              />
              
              {this.props.user ? 
                <> 

                  <Menu.Item 
                    as={NavLink} to="/users"
                    name = 'Explore'
                    active={activeItem === 'Explore'}
                    onClick={this.handleItemClick}
                  />
              
                  <Menu.Item 
                    as={NavLink} to="/conversations"
                    name = 'Messages'
                    active={activeItem === 'Messages'}
                    onClick={this.handleItemClick}
                  />


                  <Menu.Item position="right"
                    as={NavLink} to={`/users/${this.props.id}`}
                    name = 'MyProfile'
                    active={activeItem === 'MyProfile'}
                    onClick={this.handleItemClick}
                  >
                    <img className="profile_image" alt="" src={this.props.user.avatar} circular/> 
                  </Menu.Item>

                  <Menu.Item position="right"
                    name = 'Logout'
                    active={activeItem === 'Logout'}
                    onClick={this.props.clickHandler}
                  />
              
                </>
                :
                <>
                
                    <Menu.Item 
                      name = 'MyProfile'
                      active={activeItem === 'MyProfile'}
                    >
                      <img className="profile_image" alt="" src="https://i.pinimg.com/originals/0d/36/e7/0d36e7a476b06333d9fe9960572b66b9.jpg" /> 
                    </Menu.Item>
              
                </> 

              }
          </Menu>

        </Container>

      )
  }
  
}; 


export default NavBar;