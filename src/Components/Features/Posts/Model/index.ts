import * as selectors from './selectors'

export { selectors as PostsSelectors }
export { reducer as PostsRootReducer, initialValue as PostsInitialValue } from './reducer'
export { actions as PostsActions } from './actions'
export { rootSaga as PostsRootSaga } from './saga'
export type { ActionsType } from './actions'
