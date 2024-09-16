import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid2, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <>
      <Grid2
        container
        direction="row"
        justifyContent="space-between"
        align-items="center"
        sx={{ mb: 1 }}
      >
        <Grid2>
          <Typography fontSize={39} fontWeight="light">
            28, Aug, 2024.
          </Typography>
        </Grid2>

        <Grid2>
          <Button color="primary" sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Save
          </Button>
        </Grid2>
      </Grid2>
      <Grid2 container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Insert title here"
          label="Title"
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="What happened today?"
          sx={{ border: "none", mb: 1 }}
          minRows={5}
        />
      </Grid2>

      {/* TODO: Add images gallery */}
      <ImageGallery />
    </>
  );
};
