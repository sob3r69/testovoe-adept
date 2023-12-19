import { combineReducers, configureStore } from '@reduxjs/toolkit';
import companiesReducer from './reducers/CompaniesSlice';
import selectedUsersReducer from './reducers/SelectedUsersSlice';
import selectedCompaniesReducer from './reducers/SelectedCompaniesSlice';

const rootReducer = combineReducers({
  companiesReducer,
  selectedUsersReducer,
  selectedCompaniesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
