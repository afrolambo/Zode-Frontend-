import React, {Component} from 'react'
import SearchResults from '../components/SearchResults'
//import { submitSearch } from '../redux/asyncActions'
import {Form, FormControl, Button} from 'react-bootstrap'

import { withRouter } from 'react-router-dom'


class SearchAllUsers extends Component {
    state = { query: ''}
    
    searchHandler = (e) => {
        e.preventDefault()
        this.setState({ query: ""})
        this.props.history.push("/users")
    }

    getUsers = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/search')
        .then(resp => resp.json)
        .then(data => console.log(data))
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

    discover = this.state

    render() {
        console.log(this.state)
        return (
            <>
             <h2>Users: </h2>
             <Form inline onSubmit={this.getUsers} >
                 <FormControl 
                    type="text"
                    placeholders="Search"
                    className="mr-sm-2"
                    name="query"
                    value={this.state.query}
                    onChange={this.handleChange}
                />
                <Button type="submit" variant="outline-success">Users</Button>
             </Form>
             <SearchResults discover={this.discover}/>
            </>
        )
    }
}

export default withRouter(SearchAllUsers)