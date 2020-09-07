import React from 'react'
import styled from 'styled-components'
import { ThemeType } from '@Styled/theme'

const Title = styled.span`
	display: block;
	font-weight: ${({ theme: { weights } }: ThemeType) => weights.bold};
`

interface PropsType {
	children: React.ReactNode
}
export const PostTitle: React.FC<PropsType> = ({ children }): React.ReactElement => {
	return <Title>{children}</Title>
}
