import axios from 'axios';
import * as actions from './actions';

axios.defaults.baseURL = 'http://localhost:3000';

export const fetchContact = () => (dispatch) => {
  dispatch(actions.fetchContactRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch((error) => dispatch(actions.fetchContactError(error)));
};

export const addContact = (contact) => (dispatch) => {
  dispatch(actions.addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch((error) => dispatch(actions.addContactError(error)));
};

export const removeContact = (id) => (dispatch) => {
  dispatch(actions.removeContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.removeContactSuccess(id)))
    .catch((error) => dispatch(actions.removeContactError(error)));
};
