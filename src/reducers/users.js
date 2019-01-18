

const initialState = {
  all: [
    {
      firstName: 'Terry',
      lastName: 'Prattchett',
      age: '47',
      profession: 'Writer'
    }
  ],
  managed: null
}

export default function usersReducer (state = initialState, { type, payload }) {
  switch(type) {
    default : return state
  }
}