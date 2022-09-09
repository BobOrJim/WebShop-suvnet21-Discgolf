import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as React from "react";
import * as yup from "yup";

interface IAddressForm {
  firstName: string;
  lastName: string;
  address: string;
  zipCode: string;
  city: string;
  email: string;
  phone: string;
}

interface Props {
  submit: () => void;
}

type YupObject = Record<keyof IAddressForm, yup.AnySchema>;

const formSchema = yup.object<YupObject>({
  firstName: yup
    .string()
    .matches(/^[a-ö A-Ö]+$/, "Only accepts letters")
    .min(2)
    .max(25)
    .required(),
  lastName: yup
    .string()
    .min(2)
    .max(25)
    .matches(/^[a-ö A-Ö]+$/, "Only accepts letters")
    .required(),
  address: yup
    .string()
    .matches(/^[a-ö A-ö 0-9]/, "Only accepts letters and numbers")
    .required(),
  zipCode: yup.string().matches(/^\d+$/, "Only accepts numbers").min(5).max(5).required(),
  city: yup
    .string()
    .min(2)
    .max(25)
    .matches(/^[a-ö A-Ö]+$/, "Only accepts letters")
    .required(),
  email: yup.string().email().required(),
  phone: yup.string().matches(/^\d+$/, "Only accepts numbers").min(10).max(12).required(),
});

export default function AddressForm({ submit }: Props) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      zipCode: "",
      city: "",
      email: "",
      phone: "",
    },
    validationSchema: formSchema,
    onSubmit: () => {
      submit();
    },
  });

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Shipping address
      </Typography>
      <Box component='form' onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='firstName'
              name='firstName'
              label='First name'
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.firstName)}
              helperText={formik.errors.firstName}
              fullWidth
              autoComplete='on'
              variant='standard'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='lastName'
              name='lastName'
              label='Last name'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.lastName)}
              helperText={formik.errors.lastName}
              fullWidth
              // autoComplete="on"
              variant='standard'
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <TextField
              required
              id='email'
              name='email'
              label='Email'
              value={formik.values.email}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.email)}
              helperText={formik.errors.email}
              fullWidth
              // autoComplete="on"
              variant='standard'
            />
          </Grid>
          <Grid item xs={10} sm={6}>
            <TextField
              required
              id='address'
              name='address'
              label='Address'
              value={formik.values.address}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.address)}
              helperText={formik.errors.address}
              fullWidth
              // autoComplete="shipping address-line1"
              variant='standard'
            />
          </Grid>
          <Grid item xs={10} sm={3}>
            <TextField
              required
              id='zipCode'
              name='zipCode'
              label='Zip code'
              value={formik.values.zipCode}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.zipCode)}
              helperText={formik.errors.zipCode}
              fullWidth
              variant='standard'
            />
          </Grid>
          <Grid item xs={10} sm={5}>
            <TextField
              required
              id='city'
              name='city'
              label='City'
              value={formik.values.city}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.city)}
              helperText={formik.errors.city}
              fullWidth
              // autoComplete="shipping address-line1"
              variant='standard'
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              required
              id='phone'
              name='phone'
              label='Phone number'
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={Boolean(formik.errors.phone)}
              helperText={formik.errors.phone}
              fullWidth
              autoComplete='on'
              variant='standard'
            />
          </Grid>
        </Grid>
        <Button type='submit'>Next</Button>
      </Box>
    </React.Fragment>
  );
}
