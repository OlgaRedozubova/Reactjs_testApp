import * as actionTypes from '../constants/ActionTypes';

export const createContact = (contact) => {
  return {
    type: actionTypes.ADD_CONTACTS,
    contact: contact,
  }
};

export const deleteContact = (id) => {
  return {
    type: actionTypes.DELETE_CONTACTS,
    id: id,
  }
};