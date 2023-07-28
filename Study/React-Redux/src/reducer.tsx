const initialState = {
  toggle: false,
  counter: 1,
  toDo: [
    {
      text: "",
      id: "",
    },
  ],
};

export const TOGGLE = "TOGGLE";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const DELETE = "DELETE";

export const addToDo = (text: string) => {
  return {
    type: ADD,
    text,
  };
};

export const deleteToDo = (id: string) => {
  return {
    type: DELETE,
    id,
  };
};

const rootReducer = (
  state = initialState,
  action: { type: string; text?: string; id?: string }
) => {
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
    case ADD:
      return {
        ...state,
        toDo: [
          ...state.toDo,
          {
            text: action.text,
            id: Date.now().toString(),
          },
        ],
      };
    case DELETE:
      return {
        ...state,
        toDo: state.toDo.filter((toDo) => toDo.id !== action.id),
      };
    default:
      return state;
  }
};

export default rootReducer;
