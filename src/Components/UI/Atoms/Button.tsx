import React from 'react'
import styled from 'styled-components'
import { ThemeType } from '@Styled/theme'

interface ButtonType {
	danger: boolean | undefined
	theme: ThemeType
}
const ButtonComponent = styled.button<ButtonType>`
	background: transparent;
	cursor: pointer;
	outline: none;
	padding: 7px 10px;
	border-style: dashed;
	border-radius: 7px;
	${({ theme: { colors }, danger }) =>
		danger
			? `color: ${colors.red}; border: 1px solid ${colors.red};`
			: `color: ${colors.black}; border: 1px solid ${colors.black};`};
`
interface PropsType {
	children: React.ReactNode
	onClick: () => void
	danger?: boolean
}
export const Button: React.FC<PropsType> = ({
	children,
	onClick,
	danger,
}): React.ReactElement => {
	return (
		<ButtonComponent onClick={onClick} danger={danger}>
			{children}
		</ButtonComponent>
	)
}
