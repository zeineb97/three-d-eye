const initState = {}

const diagnosticReducer =(state= initState,action )=>{
    switch (action.type) {
        case 'ADD_DIAGNOSTIC_SUCCESS':
          console.log('Vous avez envoyez votre Diagnostic');
          return state;
        case 'ADD_DIAGNOSTIC_ERROR':
          console.log('Erreur ');
          return state;
        default:
          return state;
      }
}

export default diagnosticReducer;



