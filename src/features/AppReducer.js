import { ADD_EMPLOYEE, REMOVE_EMPLOYEE, EDIT_EMPLOYEE } from "./ActionTypes";

const AppReducer = (state, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      console.log(state, action.payload);
      break;
    default:
      return state;
  }
};

export default AppReducer;
