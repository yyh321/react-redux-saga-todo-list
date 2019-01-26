import React, { Component } from 'react';
import { connect,} from 'react-redux'

import 'antd/dist/antd.css';
import { Input, Button,List  } from 'antd';

import {
  getInputValueChangeAction, 
  getAddItemAction,
  getDeleteItemAction,
  getInitListAction
} from '../store/createActions'


class TodoList extends Component{

  componentDidMount(){
    // get init data
    this.props.getInitList()
  }
  
  render () {
    const {inputValue,list ,inputValueChange, handleAddItem, handleDeleteItem} = this.props
    return (
      <div style={{marginTop:50, marginLeft:50}}>
        <Input 
          placeholder="Todo Info" 
          style={{width:400, marginRight:10}}
          value={inputValue}
          onChange={inputValueChange}
        />
        <Button type="primary" onClick={handleAddItem}>提交</Button>

        <List
          style={{width:400,marginTop:10}}
          bordered
          dataSource={list}
          renderItem={(item,index) => (<List.Item onClick={() => {handleDeleteItem(index)}}>{item}</List.Item>)}
        />
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputValueChange(e) {
      const action = getInputValueChangeAction(e.target.value)
      dispatch(action)
    },
    handleAddItem() {
      const action = getAddItemAction()
      dispatch(action)
    },
    handleDeleteItem(index) {
      const action = getDeleteItemAction(index)
      dispatch(action)
    },
    getInitList() {
      const action = getInitListAction()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)