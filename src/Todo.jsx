import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./redux/todoSlice";

export const Todo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo);
  const dataChange=()=>{
    console.log("data")
  }
  
  useEffect(() => {
    dispatch(fetchTodo());
  }, []);
  
  console.log(data);
  
  return (
    <div>
      <button onClick={dataChange}>App data</button>
      {data.isLoading ? (
        <h1>Loading</h1>
      ) : (
        data.data.map((todo) => {
          return <p className="text-3xl font-bold underline" key={todo.id}>{todo.title}</p>;
        })
      )}
    </div>
  );
};
