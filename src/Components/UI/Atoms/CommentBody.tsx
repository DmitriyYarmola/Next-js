import React from 'react'
import styled from 'styled-components'

const Body = styled.h2`
	font-size: 24px;
`
interface PropsType {
	children: React.ReactNode
}
export const CommentBody: React.FC<PropsType> = ({ children }): React.ReactElement => {
	return <Body>{children}</Body>
}
