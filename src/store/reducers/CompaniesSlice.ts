import { createSlice } from '@reduxjs/toolkit';
import { Companies } from '../../shared/types/DataTypes';

const initialState: Companies[] = [
  {
    id: 0,
    name: 'Google',
    address: 'Mountain View, CA',
    selected: false,
    employees: [
      {
        id: 'google_employee-1',
        name: 'John',
        secondName: 'Doe',
        job: 'Developer',
        age: 30,
      },
      {
        id: 'google_employee-2',
        name: 'Jane',
        secondName: 'Doe',
        job: 'Designer',
        age: 25,
      },
    ],
  },
  {
    id: 1,
    name: 'Facebook',
    address: 'Menlo Park, CA',
    selected: false,
    employees: [
      {
        id: 'facebook_employee-1',
        name: 'John',
        secondName: 'Doe',
        job: 'Developer',
        age: 30,
      },
    ],
  },
];

export const CompaniesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addCompany(state, action) {
      state.push(action.payload);
    },
    changeName(state, action) {
      state.forEach((item, index) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
        }
      });
    },
    changeAdress(state, action) {
      state.forEach((item, index) => {
        if (item.id === action.payload.id) {
          item.address = action.payload.address;
        }
      });
    },
    saveSelectedEmployees(state, action) {
      state.forEach((item, index) => {
        if (item.id === action.payload.id) {
          item.employees = action.payload.employees;
        }
      });
    },
    setSelected(state, action) {
      state.forEach((item, index) => {
        if (item.id === action.payload.id) {
          item.selected = action.payload.selected;
        }
      });
    },
  },
});

export const { addCompany, changeName, changeAdress, saveSelectedEmployees, setSelected } =
  CompaniesSlice.actions;
export default CompaniesSlice.reducer;
