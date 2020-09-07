import React from 'react'
import styled from 'styled-components'
import { Popconfirm, Button } from 'antd'

const Actions = styled.div`
	display: grid;
	grid-template-columns: repeat(2, max-content);
	grid-column-gap: 15px;
	justify-content: center;
`
interface PropsType {
	children: React.ReactNode
	onDelete: (id: number | undefined) => void
	id: number | undefined
}
export const PostActions: React.FC<PropsType> = ({
	children,
	onDelete,
	id,
}): React.ReactElement => {
	return (
		<Actions>
			{children}
			<Popconfirm
				title='Are you sure？'
				okText='Yes'
				cancelText='No'
				onConfirm={() => onDelete(id)}
			>
				<Button danger>Delete</Button>
			</Popconfirm>
			,
		</Actions>
	)
}
