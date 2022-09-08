import {createSlice} from '@reduxjs/toolkit';
import {UserReduxProps} from './types';

export const UserInitialState: UserReduxProps = {
  isLogged: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: UserInitialState,
  reducers: {
    handleLoginApp(state) {
      state.isLogged = true;
    },
  },
});
