import React from 'react'
import styled from 'styled-components'

const Ring = styled.div`
	display: inline-block;
	width: 80px;
	height: 80px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	&::after {
		content: ' ';
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid #fff;
		border-color: #fff transparent #fff transparent;
		animation: lds-dual-ring 1.2s linear infinite;
	}
	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`
const PositionWrapped = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
`
export const Preloader = (): React.ReactElement => {
	return (
		<PositionWrapped>
			<Ring />
		</PositionWrapped>
	)
}
