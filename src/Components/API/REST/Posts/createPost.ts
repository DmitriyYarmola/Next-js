import { AxiosResponse } from 'axios'
import { createInstance } from '@API/api'
import { PostType } from './types'

export const createPost = (payload: PostType): Promise<AxiosResponse<PostType>> => {
	return createInstance().post<PostType>('/posts', { ...payload })
}
