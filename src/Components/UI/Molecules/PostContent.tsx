import React from 'react'
import styled from 'styled-components'
import { PostBody, PostTitle } from '@UI/Atoms/Post'

const Content = styled.div`
	display: grid;
	grid-row-gap: 15px;
`
interface PropsType {
	title: string
	body: string
}
export const PostContent: React.FC<PropsType> = ({ title, body }): React.ReactElement => {
	return (
		<Content>
			<PostTitle>{title}</PostTitle>
			<PostBody>{body}</PostBody>
		</Content>
	)
}
