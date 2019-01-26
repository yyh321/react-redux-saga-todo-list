import {
  INPUT_VALUE_CHANGE,
  ADD_ITEM,
  DELETE_ITEM,
  GET_INIT_DATA,
  GET_INIT_LIST
} from '../store/actionTypes'

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

const getInitListAction = () => ({
  type: GET_INIT_LIST
})

export {
  getInputValueChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getInitDataAction,
  getInitListAction
}