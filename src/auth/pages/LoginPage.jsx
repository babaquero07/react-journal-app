import { useDispatch } from "react-redux";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/";

import { useForm } from "../../hooks";

import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(checkingAuthentication(email, password));
  };

  const onGoogleSignIn = () => {
    console.log("Google Sign In");

    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid2 container>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              name="email"
              value={email}
              onChange={onInputChange}
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
              label="Password"
              type="password"
              placeholder="Your password"
              fullWidth
            />
          </Grid2>

          <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid2 size={{ xs: 6, md: 12 }}>
              <Button variant="contained" fullWidth type="submit">
                Login
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 6, md: 12 }}>
              <Button variant="contained" fullWidth onClick={onGoogleSignIn}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container direction="row" size={12} justifyContent={"end"}>
            <Link color="inherit" to="/auth/register" component={RouterLink}>
              Don&apos;t have an account? Register
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
