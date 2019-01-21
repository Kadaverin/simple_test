import * as types from './../contants/actionTypes/users'
import  uuid  from 'uuid/v1'

const initialState = {
  all: [
    {
      id: uuid(),
      firstName: 'Terry',
      lastName: 'Prattchett',
      age: '47',
      profession: 'Writer'
    },
    {
      id: uuid(),
      firstName: 'John',
      lastName: 'Snow',
      age: '41',
      profession: 'Blader'
    },
    {
      id: uuid(),
      firstName: 'Adam',
      lastName: 'Bewert',
      age: '47',
      profession: 'Writer'
    },
    {
      id: uuid(),
      firstName: 'Block',
      lastName: 'Adwert',
      age: '47',
      profession: 'Writer'
    },
  ],
}

export default function usersReducer (state = initialState, { type, payload }) {
  switch(type) {
    case types.CREATE_USER: {
      return {
        ...state,
        all: [ ...state.all,  { ...payload, id: uuid() } ]
      }
    }

    case types.UPDATE_USER: {
      return {
        ...state,
        all: state.all.map( 
          user => user.id === payload.id ? payload : user
        )
      }
    }

    case types.DELETE_USER: {
      return {
        ...state,
        all: state.all.filter( ({id}) => id !== payload.id )
      }
    }

    default : return state
  }
}