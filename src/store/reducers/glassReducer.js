
const initState = {
    glasses: [
        {id: '1', name: 'name1',detail: 'hello hello', brand:''},
        {id: '2', name: 'name2', detail: 'hello hello', brand:''},
        {id: '3', name: 'name3',detail: 'hello hello', brand:''}
    ]
}

const glassReducer = (state = initState, action) => {
  return state;
};

export default glassReducer;