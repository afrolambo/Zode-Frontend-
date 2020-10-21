import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment, Row, Popup} from 'semantic-ui-react'


class SignCard extends React.Component {

    
    render() {
        let image = this.props.sign
        let name = this.props.sign.name
        const style = {
            borderRadius: 0.5,
            opacity: 0.7,
            padding: '0.5em',
          }

        return (
        <Grid.Column contentAlign="center" >
                <h2>{name}:</h2>

                <Popup
                    trigger={<Link to={{
                                pathname: `zodiac/${image.id}`, 
                                state: {
                                    signId: image.id
                                }
                            }}>
                                <div> 
                                    <img className="ui small circular image" 
                                        src={image.img} alt={image.name} id={image.id} bordered
                                    />
                                </div>
                            </Link> }
                    style={style}
                    content={` 
                    ${image.sunDates}` 
                    }
                    size="huge"
                    position="right-center"
                />

        </Grid.Column>
        )
    }
}

export default SignCard