import { call, put, all, takeEvery } from 'redux-saga/effects'
import { API, PostType } from '@API/index'
import { actions } from './actions'
import * as types from './types'

function* getPostsSaga() {
	yield put(actions.setLoading(true))
	try {
		const response = yield call(API.PostsAPI.getPosts)
		yield put(actions.setPosts(response.data))
		yield put(actions.setLoading(false))
	} catch (error) {
		yield put(actions.setLoading(false))
		console.log(error)
	}
}

interface CreatePostType {
	type: string
	payload: { data: PostType; push: any }
}
function* createPostSaga({ payload }: CreatePostType) {
	const { data, push } = payload
	yield put(actions.setLoading(true))
	try {
		yield call(API.PostsAPI.createPost, data)
		const response = yield call(API.PostsAPI.getPosts)
		yield put(actions.setPosts(response.data))
		yield put(actions.setLoading(false))
		yield put(push('/'))
	} catch (error) {
		yield put(actions.setLoading(false))
		console.log(error)
	}
}

interface DeletePostType {
	type: string
	payload: { id: number }
}
function* deletePostSaga({ payload }: DeletePostType) {
	const { id } = payload
	yield put(actions.setLoading(true))
	try {
		yield call(API.PostsAPI.deletePost, id)
		const response = yield call(API.PostsAPI.getPosts)
		yield put(actions.setPosts(response.data))
		yield put(actions.setLoading(false))
	} catch (error) {
		yield put(actions.setLoading(false))
		console.log(error)
	}
}

interface ViewPostType {
	type: string
	payload: { id: number }
}

function* viewPostSaga({ payload }: ViewPostType) {
	const { id } = payload
	yield put(actions.setLoading(true))
	try {
		const response = yield call(API.PostsAPI.viewPost, id)
		yield put(actions.setPost(response.data))
		yield put(actions.setLoading(false))
	} catch (error) {
		yield put(actions.setLoading(false))
		console.log(error)
	}
}

interface EditPostType {
	type: string
	payload: { id: number; data: PostType }
}

function* editPostSaga({ payload }: EditPostType) {
	const { id, data } = payload
	yield put(actions.setLoading(true))
	try {
		yield call(API.PostsAPI.updatePost, id, data)
		const response = yield call(API.PostsAPI.viewPost, id)
		yield put(actions.setPost(response.data))
		yield put(actions.setLoading(false))
	} catch (error) {
		yield put(actions.setLoading(false))
		console.log(error)
	}
}
interface SendCommentType {
	type: string
	payload: { body: string; postId: number }
}
function* sendCommentPostSaga({ payload }: SendCommentType) {
	console.log('se')
	const { postId, body } = payload
	yield put(actions.setLoading(true))
	try {
		yield call(API.CommentsAPI.createComments, { postId, body })
		const response = yield call(API.PostsAPI.viewPost, postId)
		console.log(response)
		yield put(actions.setPost(response.data))
		yield put(actions.setLoading(false))
	} catch (error) {
		yield put(actions.setLoading(false))
		console.log(error)
	}
}

export function* rootSaga() {
	yield all([
		takeEvery(types.GET_POSTS, getPostsSaga),
		takeEvery(types.CREATE_POST, createPostSaga),
		takeEvery(types.DELETE_POST, deletePostSaga),
		takeEvery(types.VIEW_POST, viewPostSaga),
		takeEvery(types.EDIT_POST, editPostSaga),
		takeEvery(types.SEND_MESSAGE, sendCommentPostSaga),
	])
}
