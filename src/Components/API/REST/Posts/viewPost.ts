import { AxiosResponse } from 'axios'
import { createInstance } from '@API/api'
import { PostInformationType } from './types'

export const viewPost = (id: number): Promise<AxiosResponse<PostInformationType>> => {
	return createInstance().get<PostInformationType>(`/posts/${id}?_embed=comments`)
}
