import { Link as RouterLink } from "react-router-dom";
import { Button, Grid2, Link, TextField } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailAndPassword } from "../../store/auth";

const formData = {
  fullName: "",
  email: "",
  password: "",
};

const formValidations = {
  fullName: [(value) => value.length >= 1, "The full name field is required."],
  email: [
    (value) => value.includes("@") && value.includes("."),
    "Please enter a valid email address.",
  ],
  password: [
    (value) => value.length >= 6,
    "Password must be at least 6 characters long.",
  ],
};

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    formState,
    fullName,
    email,
    password,
    onInputChange,
    fullNameValid,
    emailValid,
    passwordValid,
    isFormValid,
  } = useForm(formData, formValidations);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailAndPassword(formState));
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid2 container>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              name="fullName"
              value={fullName}
              onChange={onInputChange}
              error={!!fullNameValid && formSubmitted}
              helperText={fullNameValid}
              label="Full name"
              type="text"
              placeholder="Full name"
              fullWidth
            />
          </Grid2>

          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
              label="Email"
              type="email"
              placeholder="example@email.com"
              fullWidth
            />
          </Grid2>

          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
              label="Password"
              type="password"
              placeholder="Your password"
              fullWidth
            />
          </Grid2>

          <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid2 size={12}>
              <Button variant="contained" fullWidth type="submit">
                Create account
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container direction="row" size={12} justifyContent={"end"}>
            <Link color="inherit" to="/auth/login" component={RouterLink}>
              Already have an account? Login
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
