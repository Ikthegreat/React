const initialState = {
  toggle: false,
  counter: 1,
};

const TOGGLE = "TOGGLE";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const rootReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default rootReducer;
