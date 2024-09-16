import { Fab } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { Add } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}

      <NoteView />

      {/* Floating Action Button */}
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <Add />
      </Fab>
    </JournalLayout>
  );
};
