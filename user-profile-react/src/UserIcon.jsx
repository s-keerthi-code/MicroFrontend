import React, {useEffect,  useState } from 'react';
import {
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Card,
  CardActions,
  DialogContentText
} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAccountStore } from './store/accountStore';
import UserProfileModal from './UserProfileModal';

export default function UserMenu() {

  const windowCart = window.cartStore.getState().cart;
  const { email, plan, showModal, setShowModal } = useAccountStore();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showCartModal, setShowCartModal] = useState(false);
  const [cart, setCart] = useState([]);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const store = window.cartStore;
    if (!store) return;

    // Initialize with current state
    setCart(store.getState().cart);

    // // Subscribe to updates
    // const unsubscribe = store.subscribe((state) => {
    //   setCart(state.cart);
    // });

    // return () => unsubscribe?.();
  }, [windowCart]);

  console.log('cart is', cart);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <Avatar alt="User Avatar" />
      </IconButton>
      <IconButton onClick={() => setShowCartModal(true)} >
        <ShoppingCartIcon/>       
      </IconButton> 
      <span style={{color:'white', marginLeft: '5px'}}></span>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem>
          <Typography variant="body2">Email: {email}</Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="body2">Plan: {plan}</Typography>
        </MenuItem>
        <MenuItem>
          <Button
            size="small"
            onClick={() => {
              setShowModal(true);
              handleClose();
            }}
          >
            Show More
          </Button>
        </MenuItem>
      </Menu>

      {showModal && <UserProfileModal open={showModal} onClose={() => setShowModal(false)} />}
      {
        showCartModal && <>
          <Dialog
          open={showCartModal}
          onClose={() => setShowCartModal(false)}
          fullWidth
          maxWidth="md"
          >
            <DialogTitle>Your Cart</DialogTitle>
            <DialogContent>
              
              {
                cart?.map((item) => {
                  return(
                  <Card>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                      {item.name}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Quantity: {item.quantity}</Typography>
                    <CardActions>
                      <Button size="small">Remove from Cart</Button>
                    </CardActions>
                  </Card>)
                })
              }
              
            </DialogContent>
          </Dialog>
        </>
      }
    </>
  );
}
