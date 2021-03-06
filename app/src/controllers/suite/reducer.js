import { combineReducers } from 'redux';
import { fetchReducer } from 'controllers/fetch';
import { paginationReducer } from 'controllers/pagination';
import { groupOperationsReducer } from 'controllers/groupOperations';
import { NAMESPACE } from './constants';

export const suiteReducer = combineReducers({
  suites: fetchReducer(NAMESPACE, { contentPath: 'content' }),
  pagination: paginationReducer(NAMESPACE),
  groupOperations: groupOperationsReducer(NAMESPACE),
});
