import * as types from '../consts/constAction';
export const status=()=>{
  return {
    type : types.Toggle_status
  }
}
export const sort=(sort)=>{
  return {
    type : types.Sort,
    sort // tương đương sort :sort (sort sau được truyền vào từ tham số truyền vào function)
  }
}