import {createStore} from 'redux';
import myReducer from './reducers/index';
import {status,sort} from './actions/index';


const store=createStore(myReducer);
console.log('Default :' , store.getState());

store.dispatch(status());
console.log('Toggle_status' , store.getState())

store.dispatch(sort({
  by: 'name1',
  value:-1
}));

console.log('Sort : ' ,store.getState());