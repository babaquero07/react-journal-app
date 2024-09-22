import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";

import {
  Grid2,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";

export const SideBarItem = ({ id, date, body, title, imageUrls }) => {
  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(
      setActiveNote({
        id,
        date,
        body,
        title,
        imageUrls,
      })
    );
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid2 container>
          <ListItemText
            primary={title}
            sx={{
              width: "100%",
            }}
          />
          <ListItemText secondary={body} />
        </Grid2>
      </ListItemButton>
    </ListItem>
  );
};

SideBarItem.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};
