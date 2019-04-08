import authReducer from './authReducer'
import diagnosticReducer from'./diagnosticReducer'
import glassReducer from './glassReducer'
import {combineReducers} from 'redux'


const rootReducer =combineReducers({
    auth: authReducer, 
    diagnostic: diagnosticReducer, 
    glass: glassReducer
}); 

export default rootReducer
 