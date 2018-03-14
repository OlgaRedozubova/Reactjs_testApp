import * as actionTypes from '../constants/ActionTypes';

export default (state = [], action) => {
  switch(action.type) {
    case actionTypes.ADD_CONTACTS:
      return [
        ...state,
        Object.assign({}, action.contact)
      ]
    case actionTypes.DELETE_CONTACTS:
      return state.filter((data, i) => i!== action.id)
    default:return state;
  }
}