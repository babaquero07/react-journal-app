import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Grid2, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 5,
      }}
    >
      <Grid2>
        <StarOutlineIcon sx={{ fontSize: 100, color: "white" }} />
      </Grid2>
      <Grid2>
        <Typography variant="h5" color="white">
          Select or create an entry
        </Typography>
      </Grid2>
    </Grid2>
  );
};

NothingSelectedView.propTypes = {};
