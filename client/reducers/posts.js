//reducer takes in an action
//then a copy of current state
//retun updated copy

function posts(state = [], action){
  switch(action.type){
    case 'INCREMENT_LIKES':
    console.log('incrementing likes');
    const i=action.index;

    return[
      ...state.slice(0,i),
      {...state[i], likes: state[i].likes+1},
      ...state.slice(i+1),
    ]
    //RETURN UPDATERD state
    default:
      return state;
  }
}

export default posts;
