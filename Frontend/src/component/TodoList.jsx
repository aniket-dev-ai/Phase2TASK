import React from "react";
import Search from "./Search";
import AddButton from "./AddButton";
import Editbutton from "./Editbutton";
import TickBox from "./TickBox";
import DeleteButton from "./DeleteButton";

function TodoList() {
  return (
    <div>
      <div className="flex">
        <Search />
        <AddButton />
      </div>
      <div className="flex">
        <TickBox />
        <Editbutton />
        <DeleteButton />
      </div>
    </div>
  );
}

export default TodoList;
