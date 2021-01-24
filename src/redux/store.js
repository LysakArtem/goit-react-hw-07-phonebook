// import { combineReducers } from 'redux';
import {
  configureStore,
  getDefaultMiddleware,
  createReducer,
} from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  // // removeContact,
  changeFilter,
} from './actions';
// import * as actions from './actions';
import logger from 'redux-logger';

// const parsedContacts = JSON.parse(localStorage.getItem('contacts'))
//   ? JSON.parse(localStorage.getItem('contacts'))
//   : [];

const contactsReducer = createReducer([], {
  // [actions.formSubmitHandler]: (state, { payload }) => {
  //   localStorage.setItem('contacts', JSON.stringify([payload, ...state]));
  //   return [payload, ...state];
  // },
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    return [payload, ...state];
  },
  [removeContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    loading: loadingReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
