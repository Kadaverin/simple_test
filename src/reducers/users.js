

const initialState = {
  all: [
    {
      firstName: 'Terry',
      lastName: 'Prattchett',
      age: '47',
      profession: 'Writer'
    },
    {
      firstName: 'John',
      lastName: 'Snow',
      age: '41',
      profession: 'Blader'
    },
    {
      firstName: 'Adam',
      lastName: 'Bewert',
      age: '47',
      profession: 'Writer'
    },
    {
      firstName: 'Block',
      lastName: 'Adwert',
      age: '47',
      profession: 'Writer'
    },
  ],
  managed: null
}

export default function usersReducer (state = initialState, { type, payload }) {
  switch(type) {
    default : return state
  }
}