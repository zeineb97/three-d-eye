export const addDiagnostic=(diagnostic)=>{
    return (dispatch, getState, {getFirestore}) => {
        
        const firestore=getFirestore();
        const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;
        firestore.collection('diagnostics').add({
            ...diagnostic,
            userFirstName: profile.firstName,
            userLastName:  profile.lastName,
            userId: userId,
            sentAt: new Date()         
          }).then(() => {
            dispatch({ type: 'ADD_DIAGNOSTIC_SUCCESS'});
          }).catch(err => {
            dispatch({ type: 'ADD_DIAGNOSTIC_ERROR' }, err);
          });
        }
      };
     
    
      