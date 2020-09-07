import { useDispatch, useSelector } from 'react-redux'
import { PostsSelectors, Post } from '@Features/Posts'
import { Preloader } from '@UI/Atoms'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const PostPage = (): React.ReactElement => {
	const isLoading = useSelector(PostsSelectors.isLoading)
	const post = useSelector(PostsSelectors.post)
	const dispatch = useDispatch()
	const {
		query: { id },
	} = useRouter()
	useEffect(() => {
		dispatch({ type: 'VIEW_POST', payload: { id } })
	}, [dispatch, id])
	return !isLoading && post ? <Post post={post} /> : <Preloader />
}

export default PostPage
