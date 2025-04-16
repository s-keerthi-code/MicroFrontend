import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Paper,
  Box,
  useTheme
} from '@mui/material';
import {
  Email,
  AccountBox,
  Settings as SettingsIcon,
  LocationOn,
  FavoriteBorder,
  ShoppingCartSharp
} from '@mui/icons-material';

import { useAccountStore } from './store/accountStore';

const UserProfileModal = ({ open, onClose }) => {
  const theme = useTheme();
  const { email, plan, themePref, payments, orders, addresses } = useAccountStore();;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{ sx: { p: 2, borderRadius: 3 } }}
    >
      <DialogTitle>User Profile</DialogTitle>
      <DialogContent>
        <Grid container spacing={4}>
          {/* LEFT COLUMN */}
          <Grid item xs={12} md={6}>
            {/* Basic Info */}
            <Paper
              elevation={3}
              sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: theme.palette.grey[100],
                transition: '0.3s',
                '&:hover': {
                  boxShadow: 6
                }
              }}
            >
              <Typography variant="h6" color="primary" gutterBottom>Basic Info</Typography>
              <List>
                <ListItem>
                  <ListItemIcon><Email color="primary" /></ListItemIcon>
                  <ListItemText primary={email} secondary="Email" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><AccountBox color="primary" /></ListItemIcon>
                  <ListItemText primary={plan} secondary="Account Type" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><SettingsIcon color="primary" /></ListItemIcon>
                  <ListItemText primary={themePref} secondary="Theme" />
                </ListItem>
              </List>
            </Paper>

            {/* Payment Methods */}
            <Box mt={3}>
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: theme.palette.grey[50],
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: 6
                  }
                }}
              >
                <Typography variant="h6" color="primary" gutterBottom>Payment Methods</Typography>
                <List>
                  {payments.map((pay, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon>
                        <Avatar src={pay.icon} alt="payment-icon" variant="rounded" />
                      </ListItemIcon>
                      <ListItemText
                        primary={pay.method}
                        secondary={`Expires: ${pay.expiry}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Box>
          </Grid>

          {/* RIGHT COLUMN */}
          <Grid item xs={12} md={6}>
            {/* Recent Orders */}
            <Paper
              elevation={3}
              sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: theme.palette.grey[100],
                transition: '0.3s',
                '&:hover': {
                  boxShadow: 6
                }
              }}
            >
              <Typography variant="h6" color="primary" gutterBottom>Recent Orders</Typography>
              <List>
                {orders.map(order => (
                  <ListItem key={order.id} alignItems="flex-start">
                    <ListItemIcon>
                      <Avatar
                        src={order.image}
                        alt={order.item}
                        variant="rounded"
                        sx={{ width: 56, height: 56 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={<Typography fontWeight="bold">{order.item}</Typography>}
                      secondary={`Order ID: ${order.id} — ${order.date}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>

            {/* Addresses */}
            <Box mt={3}>
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: theme.palette.grey[50],
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: 6
                  }
                }}
              >
                <Typography variant="h6" color="primary" gutterBottom>Addresses</Typography>
                <List>
                  {addresses.map((addr, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon><LocationOn color="primary" /></ListItemIcon>
                      <ListItemText primary={addr.name} secondary={addr.detail} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Box>

            {/* Wishlist */}
            <Box mt={3}>
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: theme.palette.grey[100],
                  textAlign: 'center',
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: 6
                  }
                }}
              >
                <FavoriteBorder color="primary" fontSize="large" />
                <Typography variant="h6" color="textSecondary" mt={1}>
                  Wishlisted Items will appear here.
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default UserProfileModal;
