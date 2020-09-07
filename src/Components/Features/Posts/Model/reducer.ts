import { HYDRATE } from 'next-redux-wrapper'
import { PostInformationType, PostType } from '@API/REST'
import { ActionsType } from './actions'
import * as types from './types'

export const initialValue = {
	isLoading: false,
	posts: null as PostType[] | null,
	post: null as PostInformationType | null,
}

type InitialValueType = typeof initialValue
export const reducer = (state = initialValue, action: ActionsType): InitialValueType => {
	switch (action.type) {
		case HYDRATE:
			return { ...state, ...action.payload }
		case types.SET_LOADING: {
			return {
				...state,
				isLoading: action.payload,
			}
		}
		case types.SET_POSTS: {
			return {
				...state,
				posts: action.payload,
			}
		}
		case types.SET_POST: {
			return {
				...state,
				post: action.payload,
			}
		}
		default:
			return state
	}
}
