import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid2, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useEffect, useMemo } from "react";
import { setActiveNote, startSaveNote } from "../../store/journal";

export const NoteView = () => {
  const dispatch = useDispatch();
  const { active: activeNote } = useSelector((state) => state.journal);
  const { date, body, title, onInputChange, formState } = useForm(activeNote);

  const dateString = useMemo(() => {
    const newDate = new Date(date);

    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

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
            {dateString}
          </Typography>
        </Grid2>

        <Grid2>
          <Button color="primary" sx={{ padding: 2 }} onClick={onSaveNote}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Save
          </Button>
        </Grid2>
      </Grid2>
      <Grid2 container>
        <TextField
          name="title"
          value={title}
          onChange={onInputChange}
          type="text"
          variant="filled"
          fullWidth
          placeholder="Insert title here"
          label="Title"
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          name="body"
          value={body}
          onChange={onInputChange}
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
