import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RedeemIcon from '@mui/icons-material/Redeem';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

const whatsNewBusinessData = [
  {
    icon: <LocalOfferIcon color="success" />,
    emoji: '💸',
    title: 'Spring Sale: Up to 50% Off',
    description: 'Enjoy huge discounts on select categories until April 30!',
  },
  {
    icon: <LocalShippingIcon color="info" />,
    emoji: '🚚',
    title: 'Free Shipping',
    description: 'We now offer free shipping on all orders above $49.',
  },
  {
    icon: <LoyaltyIcon color="warning" />,
    emoji: '🎁',
    title: 'Loyalty Program Launched',
    description: 'Earn points every time you shop and redeem for rewards!',
  },
  {
    icon: <RedeemIcon color="secondary" />,
    emoji: '🛍️',
    title: 'New Gift Cards',
    description: 'Send digital gift cards to friends and family, starting at $10.',
  },
];

const WhatsNew = () => {
  return (
    <Box sx={{ maxWidth: 320, p: 3, borderRadius: 2, boxShadow: 3, bgcolor: 'background.paper' }}>
      <Typography variant="h5" gutterBottom>
        🛒 What’s New in Our Store
      </Typography>
      <List>
        {whatsNewBusinessData.map((item, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={`${item.emoji} ${item.title}`}
              secondary={item.description}
            />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ mt: 2 }} />
      <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
        Last updated: April 21, 2025
      </Typography>
    </Box>
  );
};

export default WhatsNew;
