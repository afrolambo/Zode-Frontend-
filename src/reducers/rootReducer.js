import {combineReducers} from 'redux'
import signsReducer from './signsReducer'

const rootReducer = combineReducers({
    signReducer: signsReducer,
})

export default rootReducer