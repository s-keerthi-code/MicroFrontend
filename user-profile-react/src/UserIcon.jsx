import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Box,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function UserMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (route) => {
    setAnchorEl(null);
    if (route) navigate(route);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="body1" sx={{ marginRight: 2 }}>
        Hello Test User
      </Typography>
      <IconButton onClick={handleClick}>
        <Avatar alt="Test User" />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose()}>
        <MenuItem onClick={() => handleClose("/orders")}>Orders</MenuItem>
        <MenuItem onClick={() => handleClose("/payments")}>Payments</MenuItem>
        <MenuItem onClick={() => handleClose("/settings")}>Settings</MenuItem>
      </Menu>
    </Box>
  );
}


export default UserMenu;