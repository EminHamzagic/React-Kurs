import { Grid } from "@mui/material";
import CreateToDo from "./CreateToDo.js";
import React, { useState } from "react";
import ToDoList from "./ToDoList.js";
import ThemeContext from "../Contexts/ThemeContext.js";
import { useContext } from "react";

export default function ToDo() {
  const theme = useContext(ThemeContext);

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
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: theme ? "rgb(17, 17, 17)" : "white",
      }}
    >
      <Grid container rowSpacing={3}>
        <Grid item xs={6}>
          <CreateToDo addNewTask={addTask} />
        </Grid>
        <Grid item xs={6}>
          <ToDoList data={tasks} />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </div>
  );
}
