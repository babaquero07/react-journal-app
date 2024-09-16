import { Grid2, TextField, Typography } from "@mui/material";

export const LoginPage = () => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid2
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" align="center" sx={{ mb: 1 }}>
          Login
        </Typography>

        <form>
          <Grid2 container>
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
          </Grid2>
        </form>
      </Grid2>
    </Grid2>
  );
};
