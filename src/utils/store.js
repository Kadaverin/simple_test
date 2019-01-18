import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './../reducers'

function configureStore () {
  const enhancers = [

  ]

  const middlewares = [
  ]

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const composedEnhancers = composeEnhancers(
      applyMiddleware(...middlewares),
      ...enhancers
  )

  const store = createStore(
      rootReducer,
      composedEnhancers
  )

  return store
}

const store = configureStore()

export default store
