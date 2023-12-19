import { createSlice } from '@reduxjs/toolkit';
import { Companies } from '../../shared/types/DataTypes';

const initialState: Companies[] = [];

export const SelectedCompaniesSlice = createSlice({
  name: 'selectedCompanies',
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
    changeSelected(state, action) {
      state.forEach((item, index) => {
        if (item.id === action.payload.id) {
          state[index].name = action.payload.name;
        }
      });
    },
    changeEmployeeName(state, action) {
      console.log(action.payload);
      state.forEach((item, index) => {
        if (item.id === action.payload.companyId) {
          item.employees.forEach((employee) => {
            if (employee.id === action.payload.employeeId) {
              employee.name = action.payload.name;
            }
          });
        }
      });
    },
  },
});

export const { addSelected, deleteSelected, changeEmployeeName } = SelectedCompaniesSlice.actions;
export default SelectedCompaniesSlice.reducer;
