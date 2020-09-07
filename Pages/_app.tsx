import React from 'react'
import { MainTemplate } from '@UI/Templates'
import { ThemeProvider } from 'styled-components'
import { theme } from '@Styled/theme'
import withReduxSaga from 'next-redux-saga'
import { AppProps } from 'next/app'
import { wrapper } from '@Lib/Store/store'
import '@UI/antd.less'
import Head from 'next/head'

interface PropsType {
	Component: any
	pagePropsType: any
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Simple blog</title>
				<meta name='keywords' content='blog, react, js, next, redux, simple, mini' />
				<meta
					name='description'
					content='This is simple blog about some people. They typing theirself posts and to send on this page.'
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<MainTemplate>
					<Component {...pageProps} />
				</MainTemplate>
			</ThemeProvider>
		</>
	)
}

export default wrapper.withRedux(withReduxSaga(MyApp))
