import { configureStore } from "@reduxjs/toolkit"
import { createWrapper, HYDRATE } from "next-redux-wrapper"
import rootReducer from "../reducers/rootReducer"

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
    }
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

export const store = () => {
  return configureStore({ reducer: masterReducer })
}

export const wrapper = createWrapper(store)
