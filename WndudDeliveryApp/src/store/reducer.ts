import {combineReducers} from 'redux';
import orderSlice from '../slices/order';
import userSlice from '../slices/user';

const rootReducer = combineReducers({
  order: orderSlice.reducer,
  user: userSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
