import { PostInformationType, PostType } from '@API/REST'
import { InferActionsType } from '@Lib/Store'
import * as types from './types'

export const actions = {
	setLoading: (payload: boolean) =>
		({
			type: types.SET_LOADING,
			payload,
		} as const),
	setPosts: (payload: PostType[]) =>
		({
			type: types.SET_POSTS,
			payload,
		} as const),
	setPost: (payload: PostInformationType) =>
		({
			type: types.SET_POST,
			payload,
		} as const),
}

export type ActionsType = InferActionsType<typeof actions>
