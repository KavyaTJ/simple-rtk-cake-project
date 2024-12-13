import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice'
import cakeReducer from './features/cake/cakeSlice'
import Iicecreamreducer from './features/icecream/icecreamSlice'


const Store = configureStore({
  reducer: {
    cake: cakeReducer, 
    icecream:Iicecreamreducer,
     user:userReducer
  },
  // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


export default Store;
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch