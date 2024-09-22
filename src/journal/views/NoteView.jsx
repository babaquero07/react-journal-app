import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import {
  Button,
  Grid2,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { ImageGallery } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useEffect, useMemo, useRef } from "react";
import {
  setActiveNote,
  startSaveNote,
  startUploadingFiles,
} from "../../store/journal";
import Swal from "sweetalert2";

export const NoteView = () => {
  const dispatch = useDispatch();
  const {
    active: activeNote,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);
  const { date, body, title, onInputChange, formState } = useForm(activeNote);

  const fileInputRef = useRef(null);

  const dateString = useMemo(() => {
    const newDate = new Date(date);

    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  const onSaveNote = async () => {
    const res = await dispatch(startSaveNote());

    Swal.fire({
      title: res.ok ? "Success" : "Error",
      text: messageSaved ? messageSaved : res.msg,
      icon: res.ok ? "success" : "error",
      confirmButtonText: "Ok",
    });
  };

  const onFileInputChange = ({ target }) => {
    const files = target.files;

    if (files.length === 0) return;

    dispatch(startUploadingFiles(files));
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
          <input
            ref={fileInputRef}
            type="file"
            id="file"
            multiple
            onChange={onFileInputChange}
            style={{ display: "none" }}
          />
          <IconButton
            color="primary"
            disabled={isSaving}
            onClick={() => fileInputRef.current.click()}
          >
            <UploadOutlined />
          </IconButton>

          <Button
            color="primary"
            sx={{ padding: 2 }}
            onClick={onSaveNote}
            disabled={isSaving}
          >
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
      <ImageGallery images={activeNote.imageUrls} />
    </>
  );
};
