import React from 'react'
import styled from 'styled-components'

const Content = styled.span`
	max-width: 250px;
    word-break: break-all;
}
`
interface PropsType {
	body: string
}
export const CommentItem: React.FC<PropsType> = ({ body }): React.ReactElement => {
	return <Content>{body}</Content>
}
