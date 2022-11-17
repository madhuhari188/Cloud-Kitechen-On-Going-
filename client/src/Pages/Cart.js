import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import CartImg from '../assets/take-away-food.svg';

export default function Cart() {
  return (
    <Box sx={{ flexGrow: 1 }} width={600}>
      <Grid container direction="column">
        <Grid item display="flex" alignItems="center">
          <img src={CartImg} alt="cart-img" />
          <Typography variant="h3">
            Your Order
          </Typography>
        </Grid>
        <Divider variant="middle" />
        <Grid item display="flex" direction="row" justifyContent="space-between" p={3}>
          <Typography variant="h6">
           Item
          </Typography>
          <Typography variant="h6">
          Quant
          </Typography>
          <Typography variant="h6">
          Price
          </Typography>
        </Grid>
        <Divider variant="middle" />
        <Grid item display="flex" direction="row" justifyContent="space-between" p={3}>
          <Typography>
            Chicken
          </Typography>
          <Typography>
            4
          </Typography>
          <Typography>
            ₹80
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}