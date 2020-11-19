import { combineReducers } from 'redux-immutable';

// 重命名 recommend 导出的reducer;
import {reducer as recommendReducer} from '../pages/discover/c-pages/recommend/store';

const cReducers = combineReducers ({
  recommend: recommendReducer
})

export default cReducers;