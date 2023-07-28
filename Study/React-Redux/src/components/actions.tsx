// actions.ts
import { ADD, DELETE } from "./ActionTypes";

// ADD Action 생성자
export const addToDo = (text: string) => {
  return {
    type: ADD,
    text,
  };
};

// DELETE Action 생성자
export const deleteToDo = (id: string) => {
  return {
    type: DELETE,
    id,
  };
};
