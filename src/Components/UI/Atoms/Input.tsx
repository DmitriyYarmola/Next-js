import React from 'react'
import styled from 'styled-components'
import { ThemeType } from '@Styled/theme'

const InputComponent = styled.input`
	padding-left: 10px;
	margin: 0;
	border-radius: 7px;
	&::placeholder {
		color: ${({ theme: { colors } }: ThemeType) => colors.grey};
	}
`
interface PropsType {
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input: React.FC<PropsType> = ({ value, onChange }): React.ReactElement => {
	return <InputComponent value={value} onChange={onChange} />
}
