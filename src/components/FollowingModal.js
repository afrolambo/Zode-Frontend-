import React,{useState, useEffect} from 'react'
import { Button, Header, Image, Modal, Segment } from 'semantic-ui-react'
import {HOST} from '../constants'
import UserSelect from './UserSelect'


export default function FollowingModal({id}) {
    
   const [open, setOpen] = useState(false)
   const [data, setData] = useState([])
   const [loading, setLoading ] = useState(false)
   const [hasError, setHasError] = useState(false)

   useEffect(() => {
        const token = localStorage.getItem("token")
       fetch(`${HOST}/${id}/followees`, {
           method: "GET", 
           headers: {
            Authorization: `Bearer ${token}`
           }
       }).then(
           res => res.json()
       ).then(res => setData(res)).catch(err => setHasError(true))
   }, [])


   



        return (
            <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Following</Button>}
            >
                <Modal.Header>Following</Modal.Header>
                    <Modal.Content> 
                        <Modal.Description>
                        <Segment textAlign="left" style={{overflow: 'auto', maxHeight: 200}}>
                            <div className="ui middle aligned divided list">
                            {data.map( d => <UserSelect key={d.id} user={d} />)}
                            </div>
                        </Segment>
                        </Modal.Description>
                        </Modal.Content>
                
            </Modal>
        )
}