import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Form, Input, Button } from 'antd'
import { PostType } from '@API/REST'

const Actions = styled.div`
	display: grid;
	grid-template-columns: repeat(2, max-content);
	grid-column-gap: 15px;
	justify-content: center;
`
interface PropsType {
	onSubmit: (data: PostType) => void
	onClose?: () => void
	initialValue: PostType
	isEdit?: boolean | undefined
}
export const CreatePostForm: React.FC<PropsType> = ({
	onSubmit,
	initialValue,
	isEdit,
	onClose,
}): React.ReactElement => {
	const router = useRouter()
	console.log('router', router)
	const onCancel = useCallback(() => {
		if (isEdit && onClose) {
			onClose()
		} else router.back()
	}, [router, isEdit, onClose])
	return (
		<Form name='post' initialValues={initialValue} onFinish={onSubmit}>
			<Form.Item
				label='Title'
				name='title'
				rules={[{ required: true, message: 'Please enter title of post!' }]}
			>
				<Input placeholder='Enter title of post' />
			</Form.Item>
			<Form.Item
				label='Body'
				name='body'
				rules={[{ required: true, message: 'Please enter body of post!' }]}
			>
				<Input placeholder='Enter body of post' />
			</Form.Item>
			<Actions>
				<Button type='dashed' htmlType='submit'>
					{isEdit ? 'Save' : 'Create'}
				</Button>
				<Button type='dashed' danger onClick={onCancel}>
					Cancel
				</Button>
			</Actions>
		</Form>
	)
}
