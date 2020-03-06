
let initialState={
  sort :{
    by:'name',
    value :1
  }
}
 
let myReducer=(state=initialState,action)=>{
  
  if(action.type==='Sort'){ 
    let {by,value}=action.sort  //by=action.sort.by
    return  {by ,value}

  }
  return state;
}
export default myReducer;