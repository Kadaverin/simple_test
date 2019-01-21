import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import rootReducer from './../reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

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
      persistedReducer,
      composedEnhancers
  )

  let persistor = persistStore(store)

  return { store, persistor }
}

const { store, persistor } = configureStore()

export { store, persistor }
