import { AxiosResponse } from 'axios'
import { createInstance } from '@API/api'
import { PostType } from './types'

export const deletePost = (id: number): Promise<AxiosResponse<PostType[]>> => {
	return createInstance().delete<PostType[]>(`/posts/${id}`)
}
