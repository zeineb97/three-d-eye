import authReducer from './authReducer'
import diagnosticReducer from'./diagnosticReducer'
import glassReducer from './glassReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'

const rootReducer =combineReducers({
    auth: authReducer, 
    diagnostic: diagnosticReducer, 
    glass: glassReducer,
    firestore: firestoreReducer
}); 

export default rootReducer
 