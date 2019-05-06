import { combineReducers } from 'redux';
import DustReducer from './dust_reducer';

const rootReducer = combineReducers({
  dust: DustReducer,
});

export default rootReducer;