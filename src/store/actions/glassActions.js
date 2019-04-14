export const addGlass=(glass)=> {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // interacte with the firestore
        // make async call to database
        const firestore=getFirestore();
        firestore.collection('glasses').add({
            ...glass, 
            createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_GLASS_SUCCESS', glass });
    }).catch(err => {
      dispatch({ type: 'ADD_GLASS_ERROR' }, err);
    });
  }
};
