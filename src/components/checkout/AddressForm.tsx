import Grid2 from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Shipping address
      </Typography>
      <Grid2 container spacing={3}>
        <Grid2 item xs={12} sm={6}>
          <TextField
            required
            id='firstName'
            name='firstName'
            label='First name'
            fullWidth
            autoComplete='on'
            variant='standard'
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField
            required
            id='lastName'
            name='lastName'
            label='Last name'
            fullWidth
            // autoComplete="on"
            variant='standard'
          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            required
            id='address1'
            name='address1'
            label='Address line 1'
            fullWidth
            // autoComplete="shipping address-line1"
            variant='standard'
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField
            required
            id='email'
            name='email'
            label='Email'
            fullWidth
            // autoComplete="on"
            variant='standard'
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <TextField
            id='phone'
            name='phone'
            label='Phone number'
            fullWidth
            // autoComplete="on"
            variant='standard'
          />
        </Grid2>
      </Grid2>
    </React.Fragment>
  );
}
