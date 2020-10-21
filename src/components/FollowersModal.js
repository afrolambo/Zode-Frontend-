import React,{useState, useEffect} from 'react'
import { Button, Header, Image, Modal, Segment } from 'semantic-ui-react'
import {HOST} from '../constants'
import UserSelect from './UserSelect'


export default function FollowersModal({id}) {
    
   const [open, setOpen] = useState(false)
   const [data, setData] = useState([])
   const [loading, setLoading ] = useState(false)

   useEffect(() => {
        const token = localStorage.getItem("token")
       fetch(`${HOST}/${id}/followers`, {
           method: "GET", 
           headers: {
            Authorization: `Bearer ${token}`
           }
       }).then(
           res => res.json()
       ).then(res => setData(res))
   }, [])


   



        return (
            <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Followers</Button>}
            >
                <Modal.Header>Followers</Modal.Header>
                {/* {users?  */}
                    <Modal.Content> 
                        <Modal.Description>
                        <Segment textAlign="left" style={{overflow: 'auto', maxHeight: 200}}>
                            <div className="ui middle aligned divided list">
                            {data.map( d => <UserSelect key={d.id} user={d} />)}
                              {/* {data.length >= 1 ?
                              return array = data.map(user => <UserSelect user={user}/>)
                              :
                              "loading"
                              } */}
                            </div>
                        </Segment>
                        </Modal.Description>
                        </Modal.Content>
                {/* : */}
                    {/* "loading" */}
                {/* } */}
                
            </Modal>
        )
}