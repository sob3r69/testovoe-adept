import { createSlice } from '@reduxjs/toolkit';
import { Companies } from '../../shared/types/DataTypes';

const initialState: Companies[] = [
  {
    name: 'Google',
    address: 'Mountain View, CA',
    employees: [
      {
        id: 'google-1',
        name: 'John Doe',
        job: 'Developer',
        age: 30,
      },
      {
        id: 'google-2',
        name: 'Jane Doe',
        job: 'Designer',
        age: 25,
      },
    ],
  },
  {
    name: 'Facebook',
    address: 'Menlo Park, CA',
    employees: [
      {
        id: 'facebook-1',
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
  reducers: {},
});

export default CompaniesSlice.reducer;
