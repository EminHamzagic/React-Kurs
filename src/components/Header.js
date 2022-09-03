import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Vezbe
          </Typography>
          <Button color="inherit">
            <Link style={{ color: "white" }} to="/">
              Calculator
            </Link>
          </Button>
          <Button color="inherit">
            <Link style={{ color: "white" }} to="/xo">
              XO
            </Link>
          </Button>
          <Button color="inherit">
            <Link style={{ color: "white" }} to="/hangman">
              Hangman
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
