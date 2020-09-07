export interface PostType {
	id?: number
	title: string
	body: string
}

export interface CommentType {
	id: number
	postId: number
	body: string
}

export interface PostInformationType extends PostType {
	comments: CommentType[]
}
