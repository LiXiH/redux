import React, { Component } from "react";
import { Input, Button, List, Typography,Modal } from "antd";
import "./App.css";
import store from "./store";
import { getinputChangeAction, getsubmitItemAction, getdelItemAction } from './store/actionCreators';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }
  handleChange = e => {
    const action = getinputChangeAction(e.target.value);
    store.dispatch(action);
  };
  handleStoreChange =()=>{
    this.setState(store.getState());
  }
  handSubmit =()=>{
    const action = getsubmitItemAction();
    store.dispatch(action);
  }
  handleItemDel = (index) => {
    Modal.confirm({
      title: "提示",
      content: "确认删除该条信息吗？",
      okText: "确认",
      cancelText:"取消",
      onOk() {
        const action = getdelItemAction(index);
        store.dispatch(action);
      },
      onCancel () {
        
      }
    })
  }
  render() {
    return (
      <div className="App">
        <p>使用actionType拆分action时，我们使用action的type为常亮或者变量，这样可以避免一些代码错误</p>
        <Input
          value={this.state.inputValue}
          style={{ margin: 20, width: 400 }}
          placeholder="todolist"
          onChange={this.handleChange}
        />
        <Button type="primary" onClick={this.handSubmit}>提交</Button>
        <List
          style={{ width: 400, marginLeft: 20 }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => <List.Item onClick={this.handleItemDel.bind(this,index)}>{item}</List.Item>}
        />
      </div>
    );
  }
}

export default App;
