import React from 'react';
import SignCard from './SignCard'

class ZodiacList extends React.Component {
    listSigns = () => {
        return this.props.signNames.map(sign => <SignCard key={sign.id} sign={sign}/> )
    }
    render() {

        return(
            <div>
                {this.listSigns()}
            </div>
        )
    }
}

export default ZodiacList