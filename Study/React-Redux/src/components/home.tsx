import React, { useState } from "react";
import { connect } from "react-redux";
import { ADD, DELETE } from "../reducer";

function Home({ toDo, addToDo, deleteToDo }) {
  const [text, setText] = useState("");

  function onChange(event) {
    setText(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    addToDo(text);
    setText("");
  }

  function onDelete(id) {
    deleteToDo(id);
  }

  return (
    <div>
      <h1>ToDo 목록</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>추가</button>
      </form>
      <ul>
        {toDo.map((item: { text: string; id: string }) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => onDelete(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    toDo: state.toDo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch({ type: ADD, text }),
    deleteToDo: (id) => dispatch({ type: DELETE, id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
