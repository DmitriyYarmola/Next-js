import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { PostType } from '@API/REST'
import { PostItem } from '@UI/Organisms'

const Posts = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
`
interface PropsType {
	posts: PostType[]
}
export const ListPosts: React.FC<PropsType> = ({ posts }): React.ReactElement => {
	const dispatch = useDispatch()
	const router = useRouter()
	const onView = useCallback(
		(id: number | undefined) => {
			router.push(`/posts/${id}`)
		},
		[router]
	)
	const onDelete = useCallback(
		(id: number | undefined) => {
			dispatch({ type: 'DELETE_POST', payload: { id } })
		},
		[dispatch]
	)

	return (
		<Posts>
			{posts.map(({ title, body, id }: PostType) => (
				<PostItem
					key={id}
					id={id}
					title={title}
					body={body}
					onView={onView}
					onDelete={onDelete}
				/>
			))}
		</Posts>
	)
}
