import authReducer from './authReducer'
import diagnosticReducer from'./diagnosticReducer'
import glassReducer from './glassReducer'
import messageReducer from './messageReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer =combineReducers({
    auth: authReducer, 
    diagnostic: diagnosticReducer, 
    glass: glassReducer,
    message : messageReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
}); 

export default rootReducer
 