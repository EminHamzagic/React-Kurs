import { Grid } from "@mui/material";
import CreateToDo from "./CreateToDo.js";
import React, { useState } from "react";
import ToDoList from "./ToDoList.js";

export default function ToDo() {
  const [tasks, setTasks] = useState([
    {
      name: "Uci nemacki",
      desc: "Moras da ucis nemacki",
      date: "20.9.2022",
    },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <Grid container rowSpacing={3}>
      <Grid item xs={6}>
        <CreateToDo addNewTask={addTask} />
      </Grid>
      <Grid item xs={6}>
        <ToDoList data={tasks} />
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  );
}
