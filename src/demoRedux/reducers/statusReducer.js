
let initialState=true;
let myReducer=(state=initialState,action)=>{
  if(action.type==='Toggle_status'){
    state=!state
    return state;
  }
  return state;
}
export default myReducer;