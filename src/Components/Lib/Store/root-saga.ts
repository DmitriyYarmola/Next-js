import { all } from 'redux-saga/effects'
import { PostsRootSaga } from '@Features/Posts'

export function* rootSaga() {
	yield all([PostsRootSaga()])
}
