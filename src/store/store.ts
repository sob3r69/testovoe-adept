import { combineReducers, configureStore } from '@reduxjs/toolkit';
import companiesReducer from './reducers/CompaniesSlice';
import selectedUsersReducer from './reducers/SelectedUsersSlice';

const rootReducer = combineReducers({ companiesReducer, selectedUsersReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
