import React, { useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./ContactForm.css";
function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // Fetch data from Google Sheets API and populate form fields with initial values
    axios
      .get(
        // Replace with your Google Sheets API endpoint
        "https://api.sheetbest.com/sheets/f5f021da-f3aa-4b7c-a607-00825be9496e"
      )
      .then((response) => {
        console.log("google sheets data >>>", response.data);
      });
  }, []);

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
      })
      .catch((error) => alert(error.message));
    reset();
  };
  return (
    <div className="contactForm">
      <form>
        <TextField
          name="name"
          error={errors.name}
          {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
          label="Name"
          variant="standard"
          helperText={
            errors.name &&
            "Name is required, must be alphabetic, no leading or trailing spaces"
          }
        />
        <TextField
          name="age"
          type="number"
          error={errors.age}
          {...register("age", {
            required: true,
          })}
          label="Age"
          variant="standard"
          helperText={errors.age?.type === "required" && "Age is required"}
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

      <h1>
        This form is connected to a public Google Sheets excel form that be
        reached at using a public link send message for the link.
      </h1>
    </div>
  );
}

export default ContactForm;
