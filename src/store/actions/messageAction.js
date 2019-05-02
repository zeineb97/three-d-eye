export const addMessage=(message)=>{
    return (dispatch, getState, {getFirestore}) => {
        
        const firestore=getFirestore();
        const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;
        firestore.collection('messages').add({
            ...message,
            userFirstName: profile.firstName,
            userLastName:  profile.lastName,
            userId: userId,
            sentAt: new Date()         
          }).then(() => {
            dispatch({ type: 'ADD_MESSAGE_SUCCESS'});
          }).catch(err => {
            dispatch({ type: 'ADD_MESSAGE_ERROR' }, err);
          });
        }
      };