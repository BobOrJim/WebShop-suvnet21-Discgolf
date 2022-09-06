import { useFormik } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import { Product, ProductCreate } from "./product";
import { useProductContext } from "../../context/ProductContext";
import { Button, Container, FormControl, Input, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

type ProductRecord = Record<keyof ProductCreate, Yup.AnySchema>;

const ProductSchema = Yup.object().shape<ProductRecord>({
  name: Yup.string().min(3).required("Required"),
  brand: Yup.string().min(3).required("Required"),
  speed: Yup.number().min(1).max(2).required("Required"),
  glide: Yup.number().min(1).max(2).required("Required"),
  turn: Yup.number().min(1).max(2).required("Required"),
  fade: Yup.number().min(1).max(2).required("Required"),
  weight: Yup.number().min(3).max(3).required("Required"),
  color: Yup.string().min(3).required("Required"),
  imageUrl: Yup.string().min(8).required("Required"),
  price: Yup.number().min(1).required("Required"),
  type: Yup.string().min(3).required("Required"),
});

interface ProductCardProps {
  product: Product;
}

export const ProductForm: FC<ProductCardProps> = (props: ProductCardProps): JSX.Element => {
  const { replaceProduct, addProduct } = useProductContext();
  const formik = useFormik<ProductCreate>({
    initialValues: props.product || {
      name: "",
      brand: "",
      speed: 0,
      glide: 0,
      turn: 0,
      fade: 0,
      weight: 0,
      color: "",
      imageUrl: "",
      price: 0,
      type: "",
    },
    validateOnChange: true,
    validationSchema: ProductSchema,
    onSubmit: (values: ProductCreate) => {
      if (props.product) {
        const editedDisc: Product = {
          id: props.product.id,
          ...values,
        };
        replaceProduct(editedDisc);
      } else {
        addProduct(values);
      }
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <input type="hidden" name="id" value={props.product ? props.product.id : ""} />

        <FormControl>
          <TextField margin="dense" id="name" name="name" label="Name" value={formik.values.name} onChange={formik.handleChange} error={Boolean(formik.errors.name)} helperText={formik.errors.name} />
        </FormControl>

        <FormControl>
          <TextField margin="dense" id="brand" name="brand" label="Brand" value={formik.values.brand} onChange={formik.handleChange} error={Boolean(formik.errors.brand)} helperText={formik.errors.brand} />
        </FormControl>

        <FormControl>
          <TextField margin="dense" id="speed" name="speed" label="Speed" value={formik.values.speed} onChange={formik.handleChange} error={Boolean(formik.errors.speed)} helperText={formik.errors.speed} />
        </FormControl>

        <FormControl>
          <TextField margin="dense" id="glide" name="glide" label="Glide" value={formik.values.glide} onChange={formik.handleChange} error={Boolean(formik.errors.glide)} helperText={formik.errors.glide} />
        </FormControl>

        <FormControl>
          <TextField margin="dense" id="turn" name="turn" label="Turn" value={formik.values.turn} onChange={formik.handleChange} error={Boolean(formik.errors.turn)} helperText={formik.errors.turn} />
        </FormControl>

        <FormControl>
          <TextField margin="dense" id="fade" name="fade" label="Fade" value={formik.values.fade} onChange={formik.handleChange} error={Boolean(formik.errors.fade)} helperText={formik.errors.fade} />
        </FormControl>

        <FormControl>
          <TextField margin="dense" id="weight" name="weight" label="Weight" value={formik.values.weight} onChange={formik.handleChange} error={Boolean(formik.errors.weight)} helperText={formik.errors.weight} />
        </FormControl>

        <FormControl>
          <TextField margin="dense" id="color" name="color" label="Color" value={formik.values.color} onChange={formik.handleChange} error={Boolean(formik.errors.color)} helperText={formik.errors.color} />
        </FormControl>

        <FormControl>
          <TextField margin="dense" id="imageUrl" name="imageUrl" label="Image Url" value={formik.values.imageUrl} onChange={formik.handleChange} error={Boolean(formik.errors.imageUrl)} helperText={formik.errors.imageUrl} />
        </FormControl>

        <FormControl>
          <TextField margin="dense" id="price" name="price" label="Price" value={formik.values.price} onChange={formik.handleChange} error={Boolean(formik.errors.price)} helperText={formik.errors.price} />
        </FormControl>

        <FormControl>
          <TextField margin="dense" id="type" name="type" label="Type" value={formik.values.type} onChange={formik.handleChange} error={Boolean(formik.errors.type)} helperText={formik.errors.type} />
        </FormControl>

        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
      </form>
    </Container>
  );
};
