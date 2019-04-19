import React, { Component } from "react";
import { Input, Button, List, Typography } from "antd";
import "./App.css";
import store from "./store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }
  handleChange = e => {
    const action = {
      type: "input_change",
      value: e.target.value
    };
    store.dispatch(action);
  };
  render() {
    return (
      <div className="App">
        <Input
          value={this.state.inputValue}
          style={{ margin: 20, width: 400 }}
          placeholder="todolist"
          onChange={this.handleChange}
        />
        <Button type="primary">提交</Button>
        <List
          style={{ width: 400, marginLeft: 20 }}
          header={<div>评论列表</div>}
          footer={<div>共n条数据</div>}
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}

export default App;
