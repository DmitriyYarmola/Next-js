import { AxiosResponse } from 'axios'
import { createInstance } from '@API/api'
import { PostInformationType } from '..'

interface PayloadType {
	postId: number
	body: string
}
export const createComments = (
	payload: PayloadType
): Promise<AxiosResponse<PostInformationType>> => {
	return createInstance().post<PostInformationType>('/comments', { ...payload })
}
