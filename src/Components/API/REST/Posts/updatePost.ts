import { AxiosResponse } from 'axios'
import { createInstance } from '@API/api'
import { PostType } from './types'

interface PayloadType {
	title: string
	body: string
}
export const updatePost = (
	id: number,
	payload: PayloadType
): Promise<AxiosResponse<PostType>> => {
	return createInstance().put<PostType>(`/posts/${id}`, { ...payload })
}
