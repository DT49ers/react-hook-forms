import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import "./App.css";
import axios from "axios";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sumbitFormToGoogle = ({ name, age, salary, hobby }) => {
    // Perform form validation and submission logic here
    // Convert form data to JSON format for API submission
    axios
      .post(
        "https://api.sheetbest.com/sheets/f5f021da-f3aa-4b7c-a607-00825be9496e",
        { name, age, salary, hobby }
      )
      .then((response) => {
        alert("Row submitted successfully!");
        console.log(response);
      })
      .catch((error) => alert(error.message));
    reset();
  };
  return (
    <div className="app">
      <h1>Hello World!</h1>
      <form>
        <TextField
          name="name"
          error={errors.name}
          {...register("name", { required: true })}
          label="Name"
          variant="standard"
          helperText={errors.name && "Name is required"}
        />
        <TextField
          name="age"
          error={errors.age}
          {...register("age", { required: true })}
          label="Age"
          variant="standard"
          helperText={errors.age && "Age is required"}
        />
        <TextField
          name="salary"
          error={errors.salary}
          {...register("salary", { required: true })}
          label="Salary"
          variant="standard"
          helperText={errors.salary && "Salary is required"}
        />
        <TextField
          name="hobby"
          error={errors.hobby}
          {...register("hobby", { required: true })}
          label="Hobby"
          variant="standard"
          helperText={errors.hobby && "Hobby is required"}
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
