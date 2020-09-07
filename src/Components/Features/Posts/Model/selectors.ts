import { AppStateType } from '@Lib/Store'
import { PostInformationType, PostType } from '@API/REST'

export const posts = (state: AppStateType): PostType[] | null =>
	state.PostsRootReducer.posts

export const post = (state: AppStateType): PostInformationType | null =>
	state.PostsRootReducer.post

export const isLoading = (state: AppStateType): boolean =>
	state.PostsRootReducer.isLoading
