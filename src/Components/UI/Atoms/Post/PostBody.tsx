import React from 'react'
import styled from 'styled-components'

const Body = styled.span``

interface PropsType {
	children: React.ReactNode
}
export const PostBody: React.FC<PropsType> = ({ children }): React.ReactElement => {
	return <Body>{children}</Body>
}
