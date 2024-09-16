import { Link as RouterLink } from "react-router-dom";
import { Button, Grid2, Link, TextField } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid2 container>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label="Full name"
              type="text"
              placeholder="Full name"
              fullWidth
            />
          </Grid2>

          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="example@email.com"
              fullWidth
            />
          </Grid2>

          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Your password"
              fullWidth
            />
          </Grid2>

          <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid2 size={12}>
              <Button variant="contained" fullWidth>
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
