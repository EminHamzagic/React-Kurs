import { Grid, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";

export default function CreateToDo(props) {
  const [createTask, setCreateTask] = useState({
    name: "",
    desc: "",
    date: "",
  });

  const handleOnChange = (value, inputType) => {
    setCreateTask({ ...createTask, [inputType]: value });
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      rowSpacing={2}
    >
      <Grid item xs={6}>
        <Typography variant="h4" component="h2">
          Create ToDo Task
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          value={createTask.name}
          id="standard-basic"
          label="Name"
          variant="standard"
          onChange={(event) => {
            handleOnChange(event.target.value, "name");
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          value={createTask.desc}
          id="standard-basic"
          label="Description"
          variant="standard"
          onChange={(event) => {
            handleOnChange(event.target.value, "desc");
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          value={createTask.date}
          id="standard-basic"
          label="Date"
          variant="standard"
          onChange={(event) => {
            handleOnChange(event.target.value, "date");
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          onClick={() => {
            props.addNewTask(createTask);
            setCreateTask({ name: "", desc: "", date: "" });
          }}
        >
          Add Task
        </Button>
      </Grid>
    </Grid>
  );
}
