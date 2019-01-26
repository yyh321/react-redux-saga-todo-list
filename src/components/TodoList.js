import React, { Component } from 'react';
import store from '../store';
import { getInputChageAction, getAddItemAction, getDeleteItemAction,getInitAction,getInitTodoList} from '../store/createActions'
import TodoListUI from './TodoListUI'
import 'antd/dist/antd.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    store.subscribe(() => { this.setState(store.getState())})
     this.handleInputValueChange = this.handleInputValueChange.bind(this)
     this.handleAddItem = this.handleAddItem.bind(this)
     this.handleDeleteItem = this.handleDeleteItem.bind(this)
  }

  handleInputValueChange(e) {
    const action = getInputChageAction(e.target.value)
    store.dispatch(action)
  }

  handleAddItem() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleDeleteItem(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  render() { 
    return <TodoListUI 
    inputValue={this.state.inputValue}
    handleInputValueChange={this.handleInputValueChange}
    handleAddItem = {this.handleAddItem}
    list={this.state.list}
    handleDeleteItem = {this.handleDeleteItem}
    />
  }

  componentDidMount() {
    const action = getInitTodoList();
    store.dispatch(action);
  }
}
 
export default TodoList;