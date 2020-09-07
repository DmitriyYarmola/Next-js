import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { PostType } from '@API/REST'
import { Button } from '@UI/Atoms'
import { ListPosts } from '../Molecules'

const Wrapped = styled.div``
const PostsWrapped = styled.div`
	margin: 30px 0;
`
interface PropsType {
	posts: PostType[]
}
export const PostsActions: React.FC<PropsType> = ({ posts }): React.ReactElement => {
	const router = useRouter()
	return (
		<Wrapped>
			<Button
				onClick={(): void => {
					router.push('/posts/new')
				}}
			>
				Create
			</Button>
			<PostsWrapped>
				<ListPosts posts={posts} />
			</PostsWrapped>
		</Wrapped>
	)
}
