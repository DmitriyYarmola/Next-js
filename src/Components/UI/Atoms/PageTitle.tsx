import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
	font-size: 36px;
`
interface PropsType {
	children: React.ReactNode
}
export const PageTitle: React.FC<PropsType> = ({ children }): React.ReactElement => {
	return <Title>{children}</Title>
}
