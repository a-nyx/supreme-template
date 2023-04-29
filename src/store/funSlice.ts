import {
  createSlice,
  createAsyncThunk,
  SliceCaseReducers,
} from '@reduxjs/toolkit';

import { RootState } from '@store';
import type { FetchStatus, FunResponse } from '@/types/types';

const sliceName = 'fun';

type FunSlice = {
  data: FunResponse | null;
  status: FetchStatus;
};

const fetchFun = createAsyncThunk<FunResponse, undefined, { state: RootState }>(
  `${sliceName}/fetch`,
  async () => {
    const fetchData = async () => {
      const response = await fetch('https://www.boredapi.com/api/activity');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return await response.json();
    };
    return await fetchData();
  }
);

const funSlice = createSlice<FunSlice, SliceCaseReducers<FunSlice>>({
  name: sliceName,
  initialState: {
    data: null,
    status: 'initial',
  },
  reducers: {
    reset(state) {
      state.data = null;
      state.status = 'initial';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFun.pending, (state) => {
      state.status = 'loading';
      state.data = null;
    });

    builder.addCase(fetchFun.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });

    builder.addCase(fetchFun.rejected, (state) => {
      state.data = null;
      state.status = 'error';
    });
  },
});

const { reducer: funReducer, actions: funActions } = funSlice;
export { funActions, fetchFun };
export default funReducer;
