import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid2, IconButton, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";

import { logout } from "../../firebase/providers";
import { useDispatch } from "react-redux";
import { clearNotesOnLogout } from "../../store/journal";

export const NavBar = ({ drawerWidth }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    logout();

    dispatch(clearNotesOnLogout());
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        width: {
          sm: `calc(100 % - ${drawerWidth}px)`,
          ml: { sm: `${drawerWidth}px` },
        },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{
            mr: 2,
            display: { sm: "none" },
          }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid2
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          size={12}
        >
          <Typography variant="h6" noWrap component="div">
            JournalApp
          </Typography>

          <IconButton sx={{ color: "#fff" }} onClick={onLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
};
