import * as types from './../contants/action-types/users'

export const createUser = (user) => ({
  type: types.CREATE_USER,
  payload: user
})

export const updateUser = (user) => ({
  type: types.UPDATE_USER,
  payload: user
})

export const deleteUser = (user) => ({
  type: types.UPDATE_USER,
  payload: user
})