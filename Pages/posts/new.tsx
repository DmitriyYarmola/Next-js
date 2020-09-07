import React, { useCallback } from 'react'
import { CreatePostForm } from '@UI/Organisms'
import { PostType } from '@API/REST'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useRouter, NextRouter } from 'next/router'
import { PostsSelectors } from '@Components/Features/Posts'
import { Preloader } from '@UI/Atoms'

const CreatePostWrapped = styled.div`
	display: grid;
	align-items: center;
	width: 500px;
	height: 100%;
	margin: 0 auto;
`
const New = (): React.ReactElement => {
	const isLoading = useSelector(PostsSelectors.isLoading)
	const dispatch = useDispatch()
	const router: NextRouter = useRouter()
	const onSubmit = useCallback(
		(data: PostType) => {
			dispatch({ type: 'CREATE_POST', payload: { data, push: router.push } })
		},
		[dispatch, router]
	)
	const initialValue = { title: '', body: '' }
	return !isLoading ? (
		<CreatePostWrapped>
			<CreatePostForm onSubmit={onSubmit} initialValue={initialValue} />
		</CreatePostWrapped>
	) : (
		<Preloader />
	)
}
export default New
