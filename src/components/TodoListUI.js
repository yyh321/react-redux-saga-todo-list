import React from 'react';
import { Input,Button,List} from 'antd';

const TodoListUI = (props) => {
 return (
    <div style={{marginTop:50,marginLeft:50}}>
      <Input 
      placeholder="Todo Info" 
      style={{width:400,marginRight:10}}
      value={props.inputValue}
      onChange={props.handleInputValueChange}
      />
      <Button type="primary" onClick={props.handleAddItem}>提交</Button>
      <List
        style={{width:400,marginTop:10}}
        bordered
        dataSource={props.list}
        renderItem={(item,index) => (<List.Item onClick={() =>{props.handleDeleteItem(index)} }>{item}</List.Item>)}
      />
    </div>
  )
}
 
export default TodoListUI;
