import React from 'react'
import styled from 'styled-components'
import { PostContent } from '@UI/Molecules'

const Information = styled.div`
	display: grid;
	grid-row-gap: 15px;
`
const Comments = styled.div``
interface PropsType {
	children: React.ReactElement
	title: string
	body: string
}
export const PostInformation: React.FC<PropsType> = ({
	children,
	title,
	body,
}): React.ReactElement => {
	return (
		<Information>
			<PostContent title={title} body={body} />
			<Comments>{children}</Comments>
		</Information>
	)
}
