import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import { useRouter } from 'next/router'
import { PostInformationType, PostType } from '@API/REST'
import { CreatePostForm, PostInformation } from '@UI/Organisms'
import { CommentItem } from '@UI/Atoms'
import { ModalWindowTemplate } from '@UI/Templates'
import { SendMessage } from '@UI/Molecules/SendMessage'

const Wrapped = styled.div`
	display: grid;
	align-items: center;
	width: 550px;
	margin: 0 auto;
`
const Information = styled.div`
	display: grid;
	justify-content: center;
	grid-row-gap: 15px;
	text-align: center;
	margin: 30px 0;
`
const PositionWrapped = styled.div`
	display: grid;
	align-items: center;
	height: 100%;
`
const Actions = styled.div`
	display: grid;
	grid-template-columns: repeat(2, max-content);
	grid-column-gap: 50px;
	margin-bottom: 15px;
	justify-content: center;
`
const Title = styled.div`
	font-weight: bold;
`
const Comments = styled.div`
	margin-top: 20px;
	padding-left: 20px;
	display: grid;
	grid-row-gap: 10px;
`
interface PropsType {
	post: PostInformationType
}
export const Post: React.FC<PropsType> = ({ post }): React.ReactElement => {
	const [isEdit, setIsEdit] = useState(false)
	const dispatch = useDispatch()
	const router = useRouter()
	const { id, title, body, comments } = post
	const onEdit = useCallback(
		(data: PostType) => {
			dispatch({ type: 'EDIT_POST', payload: { id, data } })
		},
		[dispatch, id]
	)
	const onClose = useCallback(() => {
		setIsEdit(!isEdit)
	}, [isEdit])
	const onGoBack = useCallback(() => {
		router.back()
	}, [router])
	const onSendMessage = useCallback(
		(value: string) => {
			dispatch({ type: 'SEND_MESSAGE', payload: { body: value, postId: id } })
		},
		[dispatch, id]
	)
	return (
		<>
			<PositionWrapped>
				<Wrapped>
					<Actions>
						<Button type='dashed' onClick={() => setIsEdit(!isEdit)}>
							Edit
						</Button>
						<Button type='dashed' onClick={onGoBack}>
							Go back
						</Button>
					</Actions>
					<Information>
						<PostInformation title={title} body={body}>
							<>
								<Title>Comments:</Title>
								<SendMessage onSendMessage={onSendMessage} />
								<Comments>
									{comments.map(({ body, id }) => {
										return <CommentItem key={id} body={body} />
									})}
								</Comments>
							</>
						</PostInformation>
					</Information>
				</Wrapped>
			</PositionWrapped>
			{isEdit && (
				<ModalWindowTemplate>
					<CreatePostForm
						isEdit
						onSubmit={onEdit}
						initialValue={{ title, body }}
						onClose={onClose}
					/>
				</ModalWindowTemplate>
			)}
		</>
	)
}
