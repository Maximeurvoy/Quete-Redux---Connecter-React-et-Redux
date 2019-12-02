






const CountReducer = (state = 0, action)=>{
  if (action.type === 'ADD'){
    state = state+1
  }else if(action.type === 'REMOVE'){
    state = state-1
  }else if(action.type === 'ADDTEN'){
    state = state+10
  }else if(action.type === 'REMOVETEN'){
    state = state-10
  }else if(action.type === 'RESET'){
    state = 0
  }return state
};

export default CountReducer