import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Title = styled.h1``
const Content = styled.p``
const ErrorPage = () => {
	return (
		<>
			<Title>Error 404</Title>
			<Content>
				Please{' '}
				<Link href='/'>
					<a>go back</a>
				</Link>
			</Content>
		</>
	)
}

export default ErrorPage
