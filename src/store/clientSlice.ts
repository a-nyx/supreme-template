import { createSlice } from '@reduxjs/toolkit';

interface ClientSlice {
  theme: string;
}

const initialClientState: ClientSlice = {
  theme: 'dark',
};

const clientSlice = createSlice({
  name: 'client',
  initialState: initialClientState,
  reducers: {
    replace(state, action) {
      return action.payload;
    },
    enableDarkTheme(state, action) {
      if (action.payload) {
        state.theme = 'dark';
      } else {
        state.theme = 'light';
      }
    },
  },
});

const { actions: clientActions, reducer: clientReducer } = clientSlice;
export { clientActions };
export default clientReducer;
