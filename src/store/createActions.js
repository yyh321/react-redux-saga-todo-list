import {
  INPUT_VALUE_CHANGE,
  ADD_ITEM,
  DELETE_ITEM,
  INIT_DATA
} from './actionTypes'
import axios from 'axios'

const getInputChageAction = (value) => ({
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

const getInitAction = (value) => ({
  type: INIT_DATA,
  value
})

const getTodoList = () => {
  return (dispatch) => {
    axios.get('/test.json').then((res) => {
      const action = getInitAction(res.data.data)
      dispatch(action)
    })
  }
}


export {
  getInputChageAction,
  getAddItemAction,
  getDeleteItemAction,
  getInitAction,
  getTodoList
}