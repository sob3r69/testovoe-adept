import { createSlice } from '@reduxjs/toolkit';
import { Companies } from '../../shared/types/DataTypes';

const initialState: Companies[] = [
  {
    id: 0,
    name: 'Google',
    address: 'Mountain View, CA',
    employees: [
      {
        id: 'google_employee-1',
        name: 'John Doe',
        job: 'Developer',
        age: 30,
      },
      {
        id: 'google_employee-2',
        name: 'Jane Doe',
        job: 'Designer',
        age: 25,
      },
    ],
  },
  {
    id: 1,
    name: 'Facebook',
    address: 'Menlo Park, CA',
    employees: [
      {
        id: 'facebook_employee-1',
        name: 'John Doe',
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
      console.log(action.payload);
      state.forEach((item, index) => {
        if (item.id === action.payload.id) {
          state[index].name = action.payload.name;
        }
      });
    },
  },
});

export const { addCompany, changeName } = CompaniesSlice.actions;
export default CompaniesSlice.reducer;
