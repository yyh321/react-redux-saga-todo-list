import {
  takeEvery,
  put
} from 'redux-saga/effects'

import {
  INIT_TODO_LIST
} from './actionTypes'
import axios from 'axios'
import {
  getInitAction
} from './createActions'

function* getInitTodoList() {
  try {
    const res = yield axios.get('/test.json');
    const action = getInitAction(res.data.data);
    yield put(action);
  } catch (err) {
    console.log(err);
  }
}


function* mySaga() {
  yield takeEvery(INIT_TODO_LIST, getInitTodoList);
}

export default mySaga;