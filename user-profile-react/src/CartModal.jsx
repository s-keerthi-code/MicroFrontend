import React, { useEffect, useState } from 'react';
import {
    Dialog, DialogTitle, DialogContent, Button, Divider, Stack, IconButton, 
    Card, CardActions, Typography, Paper, Box, Grid, CardMedia, CardContent
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

const CartModal = ({ open, onClose }) => {

    const windowCart = window.cartStore?.getState()?.cart;

    const removeFromCart = (id) => window.cartStore?.getState()?.removeFromCart(id);

    const [cartStore, setCartStore] = useState({ cart: [], discount: 0, promocode: '' })

    useEffect(() => {
        const store = window.cartStore;
        if (!store) return;

        // Initialize with current state
        setCartStore({ cart: store.getState().cart, discount: store.getState()?.discount, promocode: store?.getState()?.promocode });

    }, [windowCart]);

    const cartTotal = cartStore?.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const amountToPay = cartTotal - (cartStore?.discount || 0);


    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md"
        >
            <DialogTitle>
                <Typography variant="h4" gutterBottom>
                    🛒 Your Cart
                </Typography>
            </DialogTitle>
            <DialogContent>

                {cartStore?.cart.length > 0 ? <Box sx={{ p: 4 }}>

                    <Grid container spacing={3}>
                        {cartStore?.cart.map((item, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Card sx={{ display: 'flex', boxShadow: 3 }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 120, objectFit: 'contain', p: 1 }}
                                        image={item.image}
                                        alt={item.name}
                                    />
                                    <CardContent sx={{ flex: 1 }}>
                                        <Box display="flex" justifyContent="space-between" alignItems="start">
                                            <Typography variant="h6">{item.name}</Typography>
                                            <IconButton
                                                color="error"
                                                onClick={() => removeFromCart(item.id)}
                                                aria-label="remove item"
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Box>
                                        <Typography variant="body2" color="text.secondary">
                                            Quantity: {item.quantity}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Price: ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Divider sx={{ my: 4 }} />

                    <Paper elevation={3} sx={{ p: 3, maxWidth: 400 }}>
                        <Typography variant="h6" gutterBottom>
                            🧾 Order Summary
                        </Typography>
                        <Stack spacing={1}>
                            <Typography>
                                Total: <strong>₹{cartTotal}</strong>
                            </Typography>
                            <Typography>
                                Discount {cartStore?.promocode ? `(${cartStore?.promocode})` : ''}:{' '}
                                <strong style={{ color: 'green' }}>- ₹{cartStore?.discount || 0}</strong>
                            </Typography>
                            <Divider />
                            <Typography variant="h6">
                                Amount to Pay: <strong>₹{amountToPay}</strong>
                            </Typography>
                        </Stack>
                    </Paper>
                </Box>
                    : <Typography variant="h6" gutterBottom>
                        🛒 Your Cart is empty!!
                    </Typography>}

            </DialogContent>
        </Dialog>

    )
};

export default CartModal;