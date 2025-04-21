import React from "react";
import { AppBar, Box, IconButton, TextField, Toolbar } from "@mui/material"

const UserMenu = React.lazy(() => import('user_menu/UserMenu'));

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className="header-toolbar">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    > My Micro Frontend App
                    </IconButton>
                    <TextField
                        size="small"
                        placeholder="Search..."
                        variant="outlined"
                        style={{ width: '550px', margin: '0px 30px' }}
                        sx={{ bgcolor: "white", borderRadius: 1, mr: 2 }}
                    />
                    <div>
                    <UserMenu />
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
};

export default Header;