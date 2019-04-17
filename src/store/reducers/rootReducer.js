import authReducer from './authReducer'
import diagnosticReducer from'./diagnosticReducer'
import glassReducer from './glassReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer =combineReducers({
    auth: authReducer, 
    diagnostic: diagnosticReducer, 
    glass: glassReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
}); 

export default rootReducer
 