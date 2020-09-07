import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import { PostContent } from '@UI/Molecules'
import { PostActions } from '@UI/Molecules/PostActions'
import { Actions } from '@Features/Posts/Molecules'

const Item = styled.div`
	display: grid;
	grid-row-gap: 15px;
	text-align: center;
	align-items: center;
	border-radius: 20px;
	padding: 15px;
	box-shadow: 1px 2px 9px -5px rgba(0, 0, 0, 0.5);
`
interface PropsType {
	onView: (id: number | undefined) => void
	onDelete: (id: number | undefined) => void
	title: string
	body: string
	id: number | undefined
}
export const PostItem: React.FC<PropsType> = ({
	title,
	body,
	id,
	onView,
}): React.ReactElement => {
	return (
		<Item>
			<PostContent title={title} body={body} />
			<Actions id={id}>
				<Button onClick={() => onView(id)}>View</Button>
			</Actions>
		</Item>
	)
}
