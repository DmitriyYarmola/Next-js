import React from 'react'
import { API, PostType } from '@API/index'
import styled from 'styled-components'
import { PostsActionsComponent, PostsSelectors } from '@Features/Posts'
import { Preloader } from '@UI/Atoms'
import { useSelector } from 'react-redux'

const ContentWrapped = styled.div``
interface PropsType {
	posts: PostType[]
}
const HomePage: React.FC<PropsType> = ({ posts }): React.ReactElement => {
	const isLoading = useSelector(PostsSelectors.isLoading)
	return !isLoading ? (
		<ContentWrapped>
			<PostsActionsComponent posts={posts} />
		</ContentWrapped>
	) : (
		<Preloader />
	)
}
export const getStaticProps = async (): Promise<{ props: { posts: PostType[] } }> => {
	const response = await API.PostsAPI.getPosts()
	const posts = response.data
	return {
		props: {
			posts,
		},
	}
}
export default HomePage
