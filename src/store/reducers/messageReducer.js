const initState = {}

const messageReducer =(state= initState,action )=>{
    switch (action.type) {
        case 'ADD_MESSAGE_SUCCESS':
          console.log('Vous avez envoyez votre message'+state);
          return state;
        case 'ADD_MESSAGE_ERROR':
          console.log('Erreur ');
          return state;
        default:
          return state;
      }
}

export default messageReducer;