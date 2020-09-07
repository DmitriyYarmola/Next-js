import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { PostActions } from '@UI/Molecules/PostActions'

interface PropsType {
	children: React.ReactNode
	id: number | undefined
}
export const Actions: React.FC<PropsType> = ({ children, id }): React.ReactElement => {
	const dispatch = useDispatch()
	const onDelete = useCallback(
		(id: number | undefined) => {
			dispatch({ type: 'DELETE_POST', payload: { id } })
		},
		[dispatch]
	)

	return (
		<PostActions onDelete={onDelete} id={id}>
			{children}
		</PostActions>
	)
}
