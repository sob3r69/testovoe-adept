import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    name: 'Google',
    address: 'Mountain View, CA',
    checked: true,
    employees: [
      {
        name: 'John Doe',
        job: 'Developer',
        age: 30,
      },
      {
        name: 'Jane Doe',
        job: 'Designer',
        age: 25,
      },
    ],
  },
];

export const CompaniesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    changeChecked(state, action) {
      state[action.payload].checked = !state[action.payload].checked;
    },
  },
});

export default CompaniesSlice.reducer;
