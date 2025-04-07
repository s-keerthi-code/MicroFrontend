import React, { useEffect, useState } from "react";
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
} from "@mui/material";
const UserMenu = React.lazy(() => import('user_menu/UserMenu'));

const dummyProducts = [
    {
      title: "Wireless Headphones",
      image: "https://cdn-icons-png.flaticon.com/512/724/724664.png",
    },
    {
      title: "Smartphone",
      image: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
    },
    {
      title: "Running Shoes",
      image: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
    },
    {
      title: "Smartwatch",
      image: "https://cdn-icons-png.flaticon.com/512/891/891419.png",
    },
    {
      title: "Backpack",
      image: "https://cdn-icons-png.flaticon.com/512/865/865021.png",
    },
  ];  

function Dashboard() {
  const [products, setProducts] = useState<any[]>([]);

  // Simulate API call delay
  useEffect(() => {
    setTimeout(() => {
      setProducts(dummyProducts);
    }, 500);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* App Bar */}
      <AppBar position="fixed" sx={{ zIndex: 1300 }}>
        <Toolbar>
          
            My MicroFrontend App
          
          <TextField
            size="small"
            placeholder="Search..."
            variant="outlined"
            style={{ width: '550px', margin:'0px 30px'}}
            sx={{ bgcolor: "white", borderRadius: 1, mr: 2 }}
          />
          <UserMenu />
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Toolbar /> {/* Spacer for fixed AppBar */}
      <Container sx={{ mt: 4 }}>
        {/* <Grid container spacing={3}>
          {products.map((product, index) => (
            <>{product} + {index}</>
            // <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            //   <Card>
            //     <CardMedia
            //       component="img"
            //       height="180"
            //       image={product.image}
            //       alt={product.title}
            //     />
            //     <CardContent>
            //       <Typography variant="h6">{product.title}</Typography>
            //     </CardContent>
            //   </Card>
            // </Grid>
          ))}
        </Grid> */}
      </Container>
    </Box>
  );
}

export default Dashboard;
