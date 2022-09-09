import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";

export default function Header({ handleChange }) {
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
            <Link style={{ color: "white", textDecoration: "none" }} to="/">
              ToDo
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/calculator"
            >
              Calculator
            </Link>
          </Button>
          <Button color="inherit">
            <Link style={{ color: "white", textDecoration: "none" }} to="/xo">
              XO
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/hangman"
            >
              Hangman
            </Link>
          </Button>
          <ThemeBtn handleSwitch={handleChange} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
