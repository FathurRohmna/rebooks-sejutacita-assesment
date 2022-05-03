import { applyMiddleware, combineReducers, legacy_createStore as createStore, Middleware, Reducer } from "redux";
import thunk from "redux-thunk";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { createRouterMiddleware, initialRouterState, routerReducer } from "connected-next-router";

import Router from "next/router";

import { bookReducer } from "./reducer";

import { bookMarkStorage } from './reducer'

const bindMiddleware = (middleware: Middleware[]) => {
  const { composeWithDevTools } = require('redux-devtools-extension')
  return composeWithDevTools(applyMiddleware(...middleware))
}

export type State = {
  books: any,
  router: any
}

const rootReducer = combineReducers({
  books: bookReducer,
  router: routerReducer
})

const reducer: Reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    }
  
    if (typeof window !== 'undefined' && state?.router) {
      nextState.router = state.router
    }
  
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

const makeStore = (context) => {
  const routerMiddleware = createRouterMiddleware()
  const { asPath } = context.ctx || Router.router || {}
  let initialState
  if (asPath) {
    initialState = {
      router: initialRouterState(asPath)
    }
  }

  initialState = {
    ...initialState,
    books: {
      bookmark: bookMarkStorage.get() || []
    }
  }

  return createStore(reducer, initialState, bindMiddleware([routerMiddleware, thunk]))
}

export const wrapper = createWrapper(makeStore, { debug: true })