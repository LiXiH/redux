const defaultState = {
  inputValue: "",
  list: [1, 2]
};

//reducer 可以接收state但是不能修改state
export default (state = defaultState, action) => {
  if (action.type == "input_change") {
    var newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  return state;
};
