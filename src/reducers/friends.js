import * as types from "../constants/ActionTypes";

const INITIAL_STATE = [
  {
    id: 0,
    name:'FRIEND1',
    age: 18,
    phone: '0507445612',
  },
  {
    id: 1,
    name:'FRIEND2',
    age: 28,
    phone: '0507445612',
  },
  {
    id: 2,
    name:'FRIEND3',
    age: 19,
    phone: '0507445612',
  },
  {
    id: 3,
    name:'FRIEND4',
    age: 20,
    phone: '0507445612',
  }
];

export default function userFriends(state = INITIAL_STATE, action) {
  switch (action.type){
    case types.ADD_FRIEND: {
      return [
        ...state,
        {
          name: action.friendName,
          age: action.friendAge,
          phone: action.friendPhone,
        }
        //action.friendName,
      ]
    }
    case types.DELETE_FRIEND: {
      return state;
    }
    default: return state;
  }
}