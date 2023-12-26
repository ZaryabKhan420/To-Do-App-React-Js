import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todo from "./Todo";

function App() {
  var [curItem, UpdatedItem] = useState("");
  var [curList, UpdatedList] = useState([]);

  const InputEvent = (event) => {
    UpdatedItem(event.target.value);
  };

  const AddItem = () => {
    UpdatedList((oldItems) => {
      return [...oldItems, curItem];
    });
    UpdatedItem("");
  };

  const deleteItems = (id) => {
    console.log("deleted");
    UpdatedList((oldItem) => {
      return oldItem.filter((elem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1>TO DO LIST</h1>
          <br />
          <div className="inputArea">
            <input
              type="text"
              name="item"
              placeholder="Add an item"
              className="input-item"
              onChange={InputEvent}
              value={curItem}
            />
            <button className="submitBtn" onClick={AddItem}>
              Add
            </button>
          </div>
          <br />
          <ol>
            {curList.map((item, index) => {
              return (
                <Todo
                  text={item}
                  id={index}
                  key={index}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
