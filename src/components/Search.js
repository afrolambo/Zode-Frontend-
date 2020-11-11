import React from 'react'
import { Button, Form, Segment} from 'semantic-ui-react'

class Search extends React.Component {

    handleChange = (e) => {
        this.props.searchHandler(e)
    }

    render(){

        return (
            <> 
            <h2> Discover Users:</h2>
            <Segment stacked>

            <Form onSubmit={this.props.submitHandler}>
                <input 
                placeholder="search for user" 
                value={this.props.query}
                onChange={this.props.searchHandler} />
                <br/>
                <Button type="submit" value="submit" >Submit</Button>
            </Form>
            </Segment>
            </>
        )
    }
}

export default Search