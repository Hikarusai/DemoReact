import status from './statusReducer';
import sort from './sortReducer';
import {combineReducers} from 'redux';

const myReducer=combineReducers({
  status, // tương đương status :status 
  sort  // tương đương sort :sort 
})

export default myReducer;