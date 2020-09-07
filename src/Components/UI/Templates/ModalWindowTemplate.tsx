import React from 'react'
import styled from 'styled-components'

const PositionWrapped = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
`
const Wrapped = styled.div`
	position: absolute;
	z-index: 5;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: rgb(255 255 255);
	padding: 30px;
	border-radius: 24px;
`
interface PropsType {
	children: React.ReactNode
}
export const ModalWindowTemplate: React.FC<PropsType> = ({
	children,
}): React.ReactElement => {
	return (
		<PositionWrapped>
			<Wrapped>{children}</Wrapped>
		</PositionWrapped>
	)
}
