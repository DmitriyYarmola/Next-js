import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { createWrapper, MakeStore, Context } from 'next-redux-wrapper'
import { PostsInitialValue } from '@Features/Posts'
import { rootReducer } from './root-reducer'
import { rootSaga } from './root-saga'

const makeStore: MakeStore<typeof PostsInitialValue> = (context: Context) => {
	const sagaMiddleware = createSagaMiddleware()
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(sagaMiddleware))
	)

	//@ts-ignore
	store.sagaTask = sagaMiddleware.run(rootSaga)
	return store
}

// export an assembled wrapper
export const wrapper = createWrapper<typeof PostsInitialValue>(makeStore, { debug: true })

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsType<
	T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>
