import React, { useEffect, useState } from "react";
import { useStore } from 'zustand';
import {
  AppBar,
  Toolbar,
  //   Typography,
  Box,
  Avatar,
  TextField,
  Grid,
  //   Card,
  //   CardContent,
  //   CardMedia,
  Container,
  Alert,
} from "@mui/material";
const UserMenu = React.lazy(() => import('user_menu/UserMenu'));
import { cartStore } from './store/cartStore';


function Dashboard() {


  const cart = useStore(cartStore, (state) => state.cart);
  const promocode = useStore(cartStore, (state) => state.promocode);
  const discount = useStore(cartStore, (state) => state.discount);

  const [showPromoAlert, setShowPromoAlert] = useState(false);


  useEffect(() => {
    if (cart.length && promocode && discount > 0) {
      setShowPromoAlert(true);
    } else setShowPromoAlert(false);
  }, [cart.length, promocode, discount]);

  return (
    <Container sx={{ flexGrow: 1 }}>
      {/* App Bar */}
      <AppBar position="fixed" sx={{ zIndex: 1300 }}>
        <Toolbar>

          My MicroFrontend App

          <TextField
            size="small"
            placeholder="Search..."
            variant="outlined"
            style={{ width: '550px', margin: '0px 30px' }}
            sx={{ bgcolor: "white", borderRadius: 1, mr: 2 }}
          />
          <UserMenu />
        </Toolbar>
      </AppBar>
      <Grid>

     

      <product-list cartStore={cartStore}></product-list>

      { showPromoAlert && <Alert severity="success" onClose={() => setShowPromoAlert(false)}>
        `🎉 Hurray! You're eligible for a flat discount of ₹${discount}! 🛍️`
      </Alert> }
     </Grid>
    </Container>
  );
}

export default Dashboard;

