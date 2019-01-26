import {
  INPUT_VALUE_CHANGE,
  ADD_ITEM,
  DELETE_ITEM,
  GET_INIT_DATA

} from './actionTypes'


const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  if (action.type === INPUT_VALUE_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  } else if (action.type === ADD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = [...state.list, state.inputValue]
    newState.inputValue = ''
    return newState
  } else if (action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  } else if (action.type === GET_INIT_DATA) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.value
    return newState
  }


  return state
}