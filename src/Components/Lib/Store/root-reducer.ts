import { combineReducers } from 'redux'
import { PostsRootReducer } from '@Features/Posts'

export const rootReducer = combineReducers({ PostsRootReducer })
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
