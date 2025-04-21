import React, { useEffect, useState } from "react";
import { useStore } from 'zustand';
import {
  Grid,
  Container,
  Alert,
} from "@mui/material";
import { cartStore } from './store/cartStore';
import Header from "./Header";
import WhatsNew from "./WhatsNew";
import { CartStore } from "./commonInterfaces";


function Dashboard() {


  const cart = useStore(cartStore, (state: CartStore) => state.cart);
  const promocode = useStore(cartStore, (state: CartStore) => state.promocode);
  const discount: number = useStore(cartStore, (state: CartStore) => state.discount);

  const [showPromoAlert, setShowPromoAlert] = useState<boolean>(false);


  useEffect(() => {
    if (cart.length > 0 && promocode && discount > 0) {
      setShowPromoAlert(true);
    } else setShowPromoAlert(false);

    console.log('cart in Dashboard', cart, 'is', promocode,'is' , discount);
  }, [cart.length, promocode, discount]);

  return (
    <>
      <Header />
      {showPromoAlert && <Alert severity="success" onClose={() => setShowPromoAlert(false)}>
            `🎉 Hurray! You're eligible for a discount. Please apply the Promocode  of ₹${promocode}! 🛍️`
          </Alert>}
      <Container className="dashboard-container">

        <Grid className="dashboard-grid">
          <product-list cartStore={cartStore}></product-list>
          <WhatsNew />         
        </Grid>
        
      </Container>
    </>
  );
}

export default Dashboard;

