import { INPUT_CHANGE, SUBMIT_ITEM,DEL_ITEM } from './actionType';
const defaultState = {
  inputValue: "",
  list: [1, 2]
};

//reducer 可以接收state但是不能修改state
export default (state = defaultState, action) => {
  if (action.type == INPUT_CHANGE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type == SUBMIT_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  if (action.type == DEL_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
};