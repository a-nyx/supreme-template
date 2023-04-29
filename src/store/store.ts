import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'; //eslint-disable-line
import { configureStore } from '@reduxjs/toolkit';

import clientReducer, { clientActions } from './clientSlice';
import funReducer, { funActions, fetchFun } from './funSlice';

const store = configureStore({
  reducer: {
    client: clientReducer,
    fun: funReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { clientActions, funActions, fetchFun };
