import React from 'react'
import styled from 'styled-components'

const Template = styled.main`
	height: 100vh;
`
const Container = styled.div`
	width: 100%;
	height: 100%;
	max-width: 1200px;
	margin: 0 auto;
`
interface PropsType {
	children: React.ReactNode
}
export const MainTemplate: React.FC<PropsType> = ({ children }): React.ReactElement => {
	return (
		<Template>
			<Container>{children}</Container>
		</Template>
	)
}
