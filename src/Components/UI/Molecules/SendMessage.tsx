import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, Button } from 'antd'

const Wrapped = styled.div`
	display: grid;
	grid-template-columns: 1fr max-content;
`

interface PropsType {
	onSendMessage: (value: string) => void
}
export const SendMessage: React.FC<PropsType> = ({
	onSendMessage,
}): React.ReactElement => {
	const [value, setValue] = useState('')
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value)
	}
	return (
		<Wrapped>
			<Input value={value} onChange={onChange} placeholder='Enter your comment' />
			<Button onClick={() => onSendMessage(value)}>Send</Button>
		</Wrapped>
	)
}
