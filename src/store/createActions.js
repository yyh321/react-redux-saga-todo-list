import {
  INPUT_VALUE_CHANGE,
  ADD_ITEM,
  DELETE_ITEM,
  GET_INIT_DATA
} from '../store/actionTypes'

import axios from 'axios'

const getInputValueChangeAction = (value) => ({
  type: INPUT_VALUE_CHANGE,
  value
})

const getAddItemAction = () => ({
  type: ADD_ITEM
})

const getDeleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

const getInitDataAction = (value) => ({
  type: GET_INIT_DATA,
  value
})

const getInitListAction = () => {
  return (dispatch) => {
    axios.get('/test.json').then((res) => {
      const action = getInitDataAction(res.data.data)
      dispatch(action)
    })
  }
}

export {
  getInputValueChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getInitDataAction,
  getInitListAction
}