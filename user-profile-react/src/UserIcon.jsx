import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Button,
  IconButton
} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAccountStore } from './store/accountStore';
import UserProfileModal from './UserProfileModal';
import CartModal from './CartModal';

export default function UserMenu() {

  const windowCart = window.cartStore?.getState()?.cart;
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
  }, [windowCart]);

  console.log('cart is', cart);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </IconButton>
      <IconButton onClick={() => setShowCartModal(true)} >
        <span style={{ color: '#fff' }}>
          <ShoppingCartIcon style={{ color: '#fff' }}/>
          {cart.length > 0 ? `(${cart.length})` : ''}
          </span>
      </IconButton>
      <span style={{ color: 'white', marginLeft: '5px' }}></span>

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
      {showCartModal && <CartModal open={showCartModal} onClose={() => setShowCartModal(false)} />}

    </>
  );
}
