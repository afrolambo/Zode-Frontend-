import React, {useState, useEffect} from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'
import { Grid, Popup} from 'semantic-ui-react'

export default function SignCard({ sign }) {
    {
        const style = {
            borderRadius: 0.5,
            opacity: 0.7,
            padding: '0.5em',
          }
        return (
            <Grid.Column contentAlign="center" >
                <h2>{sign.name}:</h2>
                <Popup
                    trigger={<Link to={{
                                pathname: `zodiac/${sign.id}`, 
                                state: {
                                    signId: sign.id
                                }
                            }}>
                                <div> 
                                    <img className="ui small circular image" 
                                        src={sign.img} alt={sign.name} id={sign.id} bordered
                                    />
                                </div>
                            </Link> }
                    style={style}
                    content={` 
                    ${sign.sunDates}` 
                    }
                    size="huge"
                    position="right-center"
                />
            </Grid.Column>
        )
    }
}