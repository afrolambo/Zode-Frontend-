import React,{useState, useEffect} from 'react'
import { Button, Header, Image, Modal, Segment } from 'semantic-ui-react'
import {HOST} from '../constants'
import FollowerSelect from './FollowerSelect'


export default function FollowersModal({id, clickHandler}) {
    
   const [open, setOpen] = useState(false)
   const [userData, setUserData] = useState([])
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
       ).then(res => setUserData(res))
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
                            {userData.map( d => <FollowerSelect key={d.id} user={d} clickHandler={clickHandler}  />)}
                              {/* {data.length >= 1 ?
                              return array = data.map(user => <FollowerSelect user={user}/>)
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