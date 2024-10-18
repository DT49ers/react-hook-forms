import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import "./App.css";
import axios from "axios";

function App() {
  const { register, handleSubmit } = useForm();

  const sumbitFormToGoogle = (data) => {
    console.log(data);
    // Validate form data before submission
    const { name, age, salary, hobby } = data;
    // Convert form data to JSON format for API submission
    const tableData = {
      name,
      age,
      salary,
      hobby,
    };
    axios
      .post(
        "https://api.sheetbest.com/sheets/f5f021da-f3aa-4b7c-a607-00825be9496e",
        tableData
      )
      .then((response) => {
        console.log(response);
      });
    // Perform form validation and submission logic here
  };
  return (
    <div className="app">
      <h1>Hello World!</h1>
      <form>
        <TextField
          name="name"
          {...register("name", { required: true })}
          label="Name"
          variant="standard"
        />
        <TextField
          name="age"
          {...register("age", { required: true })}
          label="Age"
          variant="standard"
        />
        <TextField
          name="salary"
          {...register("salary", { required: true })}
          label="Salary"
          variant="standard"
        />
        <TextField
          name="hobby"
          {...register("hobby", { required: true })}
          label="Hobby"
          variant="standard"
        />
        <Button
          onClick={handleSubmit(sumbitFormToGoogle)}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
