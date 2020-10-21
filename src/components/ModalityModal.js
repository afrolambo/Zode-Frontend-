import React from 'react'
import { Button, Header, Image, Modal, Segment } from 'semantic-ui-react'
import {HOROSCOPE} from '../constants'


export default function ModalityModal(props) {
    
   const [open, setOpen] = React.useState(false)
   const sign = HOROSCOPE.find(sign => sign.name === props.sign)





        return (
            <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>{props.obj}</Button>}
            >
                <Modal.Header>{props.obj} {props.type}</Modal.Header>
                {sign? 
                    <Modal.Content image> 
                        <Image size='medium' src={sign.cardinalityPic} wrapped />
                        <Modal.Description>
                            <Segment>
                                <p>{sign.element} </p>
                            </Segment>
                        </Modal.Description>
                        </Modal.Content>
                :
                    "loading"
                }
                
            </Modal>
        )
}