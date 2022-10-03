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
  const [hasSubmit, setHasSubmit] = React.useState<boolean>(false);
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
      setHasSubmit(true);
      submit();
      setHasSubmit(false);
    },
  });

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Shipping address
      </Typography>
      <Box
        component='form'
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setHasSubmit(true);
          formik.handleSubmit();
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='firstName'
              name='firstName'
              label='First name'
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={Boolean(hasSubmit ? formik.errors.firstName : "")}
              helperText={hasSubmit ? formik.errors.firstName : ""}
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
              error={Boolean(hasSubmit ? formik.errors.lastName : "")}
              helperText={hasSubmit ? formik.errors.lastName : ""}
              fullWidth
              variant='standard'
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <TextField
              required
              id='email'
              name='email'
              label='Email'
              value={formik.values.email || ""}
              onChange={formik.handleChange}
              error={Boolean(hasSubmit ? formik.errors.email : "")}
              helperText={hasSubmit ? formik.errors.email : ""}
              fullWidth
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
              error={Boolean(hasSubmit ? formik.errors.address : "")}
              helperText={hasSubmit ? formik.errors.address : ""}
              fullWidth
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
              error={Boolean(hasSubmit ? formik.errors.zipCode : "")}
              helperText={hasSubmit ? formik.errors.zipCode : ""}
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
              error={Boolean(hasSubmit ? formik.errors.city : "")}
              helperText={hasSubmit ? formik.errors.city : ""}
              fullWidth
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
              error={Boolean(hasSubmit ? formik.errors.phone : "")}
              helperText={hasSubmit ? formik.errors.phone : ""}
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
