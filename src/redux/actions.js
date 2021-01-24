import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('fetchContactRequest');
export const fetchContactSuccess = createAction('fetchContactSuccess');
export const fetchContactError = createAction('fetchContactError');

export const addContactRequest = createAction('addContactRequest');
export const addContactSuccess = createAction('addContactSuccess');
export const addContactError = createAction('addContactError');

export const removeContactRequest = createAction('removeContactRequest');
export const removeContactSuccess = createAction('removeContactSuccess');
export const removeContactError = createAction('removeContactError');

// export const formSubmitHandler = createAction('contact/SubmitHandler');
// export const removeContact = createAction('contact/removeContact');
export const changeFilter = createAction('contact/changeFilter');
