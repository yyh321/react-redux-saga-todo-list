import {
  INPUT_VALUE_CHANGE,
  ADD_ITEM,
  DELETE_ITEM,
  INIT_DATA,
  INIT_TODO_LIST
} from './actionTypes'

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

const getInitTodoList = () => ({
  type: INIT_TODO_LIST
})


export {
  getInputChageAction,
  getAddItemAction,
  getDeleteItemAction,
  getInitAction,
  getInitTodoList
}