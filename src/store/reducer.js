import { combineReducers } from 'redux-immutable';

// 重命名 recommend 导出的reducer;
import {reducer as recommendReducer} from '../pages/discover/c-pages/recommend/store';
import {reducer as playReducer} from '../pages/play/store';

const cReducers = combineReducers ({
  recommend: recommendReducer,
  play: playReducer
})

export default cReducers;