import { createSlice } from '@reduxjs/toolkit';
import { Employee } from '../../shared/types/DataTypes';

const initialState: Employee[] = [];

export const SelectedUsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addSelected(state, action) {
      state.push(action.payload);
    },
    deleteSelected(state, action) {
      console.log(state);
      state.forEach((item, index) => {
        if (item.id === action.payload.id) {
          state.splice(index, 1);
        }
      });
    },
  },
});

export const { addSelected, deleteSelected } = SelectedUsersSlice.actions;
export default SelectedUsersSlice.reducer;
