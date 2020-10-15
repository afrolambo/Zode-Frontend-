import React from 'react'

class Search extends React.Component {

    handleChange = (e) => {
        this.props.searchHandler(e)
    }

    render(){

        return (
            <> 
            <h2> Discover Users:</h2>
            <form onSubmit={this.props.submitHandler}>
                <input 
                placeholder="search for user" 
                value={this.props.query}
                onChange={this.props.searchHandler} />
                <input type="submit" />
            </form>
            </>
        )
    }
}

export default Search