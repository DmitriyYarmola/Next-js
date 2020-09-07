import { AxiosResponse } from 'axios'
import { createInstance } from '@API/api'
import { PostType } from './types'

export const getPosts = (): Promise<AxiosResponse<PostType[]>> => {
	return createInstance().get<PostType[]>('/posts')
}
