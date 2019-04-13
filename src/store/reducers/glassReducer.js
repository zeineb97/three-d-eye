
const initState = {
    glasses: [
        {id: '1', name: 'name1', brand:''},
        {id: '2', name: 'name2', brand:''},
        {id: '3', name: 'name3', brand:''}
    ]
}

const glassReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_GLASS_SUCCESS':
      console.log('add glasses success');
      return state;
    case 'ADD_GLASS_ERROR':
      console.log('add glasses error');
      return state;
    default:
      return state;
  }
};



export default glassReducer;