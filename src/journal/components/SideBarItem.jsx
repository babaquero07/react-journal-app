import PropTypes from "prop-types";

import {
  Grid2,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";

export const SideBarItem = ({ id, date, body, title }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
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
};
