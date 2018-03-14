const INITIAL_STATE = [
  {
    name: 'USER1',
    age: 18,
    phone: '1233',
  },
  {
    name: 'USER2',
    age: 19,
    phone: '1233',
  },
];

export default function users(state = INITIAL_STATE, action) {
  switch (action.type){
    case 'ADD_USER': {
      return [
        ...state,
       // action.userName,
        {
          name: action.userName,
          age: action.userAge,
          phone: action.userPhone,
        },
      ];
    }
    case 'DELETE_USER': {
      return state;
    }
    default: return state;
  }
}