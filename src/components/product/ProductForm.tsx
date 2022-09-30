import { Box, Button, Container, FormControl, TextField } from "@mui/material";
import { useFormik } from "formik";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useProductContext } from "../../context/ProductContext";
import { Product, ProductCreate } from "./product";

type ProductRecord = Record<keyof ProductCreate, Yup.AnySchema>;

const ProductSchema = Yup.object().shape<ProductRecord>({
  name: Yup.string().min(3).required("Required"),
  brand: Yup.string().min(3).required("Required"),
  speed: Yup.number().min(1).max(100).required("Required"),
  glide: Yup.number().min(1).max(100).required("Required"),
  turn: Yup.number().min(1).max(100).required("Required"),
  fade: Yup.number().min(1).max(100).required("Required"),
  weight: Yup.number().min(1).max(100).required("Required"),
  color: Yup.string().min(3).required("Required"),
  imageUrl: Yup.string().min(6).required("Required"),
  price: Yup.number().min(1).required("Required"),
  type: Yup.string().min(1).required("Required"),
});

interface ProductCardProps {
  product: Product;
}

export const ProductForm: FC<ProductCardProps> = (props: ProductCardProps): JSX.Element => {
  const { replaceProduct, addProduct } = useProductContext();
  const [hasSubmit, setHasSubmit] = useState<boolean>(false);

  const navigate = useNavigate();
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
      //console.log("trying to submit");
      if (props.product.id !== undefined) {
        const editedProduct: Product = {
          id: props.product.id,
          ...values,
        };
        replaceProduct(editedProduct);
      } else {
        addProduct(values);
      }
      setHasSubmit(false);
      navigate("/admin");
    },
  });

  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setHasSubmit(true);
          formik.handleSubmit();
        }}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input type='hidden' name='id' value={props.product ? props.product.id : ""} />

        <FormControl>
          <TextField
            margin='dense'
            id='name'
            name='name'
            label='Name'
            value={formik.values.name || ""}
            onChange={formik.handleChange}
            error={Boolean(hasSubmit || formik.values.name != null ? formik.errors.name : false)}
            helperText={hasSubmit || formik.values.name != null ? formik.errors.name : ""}
          />
        </FormControl>

        <FormControl>
          <TextField
            margin='dense'
            id='brand'
            name='brand'
            label='Brand'
            value={formik.values.brand || ""}
            onChange={formik.handleChange}
            error={Boolean(hasSubmit || formik.values.brand != null ? formik.errors.brand : false)}
            helperText={hasSubmit || formik.values.brand != null ? formik.errors.brand : ""}
          />
        </FormControl>

        <FormControl>
          <TextField
            margin='dense'
            id='speed'
            name='speed'
            label='Speed'
            value={formik.values.speed || ""}
            onChange={formik.handleChange}
            error={Boolean(hasSubmit || formik.values.speed != null ? formik.errors.speed : false)}
            helperText={hasSubmit || formik.values.speed != null ? formik.errors.speed : ""}
          />
        </FormControl>

        <FormControl>
          <TextField
            margin='dense'
            id='glide'
            name='glide'
            label='Glide'
            value={formik.values.glide || ""}
            onChange={formik.handleChange}
            error={Boolean(hasSubmit || formik.values.glide ? formik.errors.glide : false)}
            helperText={hasSubmit || formik.values.glide ? formik.errors.glide : ""}
          />
        </FormControl>

        <FormControl>
          <TextField
            margin='dense'
            id='turn'
            name='turn'
            label='Turn'
            value={formik.values.turn || ""}
            onChange={formik.handleChange}
            error={Boolean(hasSubmit || formik.values.turn ? formik.errors.turn : false)}
            helperText={hasSubmit || formik.values.turn ? formik.errors.turn : ""}
          />
        </FormControl>

        <FormControl>
          <TextField
            margin='dense'
            id='fade'
            name='fade'
            label='Fade'
            value={formik.values.fade || ""}
            onChange={formik.handleChange}
            error={Boolean(hasSubmit || formik.values.fade ? formik.errors.fade : false)}
            helperText={hasSubmit || formik.values.fade ? formik.errors.fade : ""}
          />
        </FormControl>

        <FormControl>
          <TextField
            margin='dense'
            id='weight'
            name='weight'
            label='Weight'
            value={formik.values.weight || ""}
            onChange={formik.handleChange}
            error={Boolean(hasSubmit || formik.values.weight ? formik.errors.weight : false)}
            helperText={hasSubmit || formik.values.weight ? formik.errors.weight : ""}
          />
        </FormControl>

        <FormControl>
          <TextField
            margin='dense'
            id='color'
            name='color'
            label='Color'
            value={formik.values.color || ""}
            onChange={formik.handleChange}
            error={Boolean(hasSubmit || formik.values.color ? formik.errors.color : false)}
            helperText={hasSubmit || formik.values.color ? formik.errors.color : ""}
          />
        </FormControl>

        <FormControl>
          <TextField
            margin='dense'
            id='imageUrl'
            name='imageUrl'
            label='Image Url'
            value={formik.values.imageUrl || ""}
            onChange={formik.handleChange}
            error={Boolean(hasSubmit || formik.values.imageUrl ? formik.errors.imageUrl : false)}
            helperText={hasSubmit || formik.values.imageUrl ? formik.errors.imageUrl : ""}
          />
        </FormControl>

        <FormControl>
          <TextField
            margin='dense'
            id='price'
            name='price'
            label='Price'
            value={formik.values.price || ""}
            onChange={formik.handleChange}
            error={Boolean(hasSubmit || formik.values.price ? formik.errors.price : false)}
            helperText={hasSubmit || formik.values.price ? formik.errors.price : ""}
          />
        </FormControl>

        <FormControl>
          <TextField
            margin='dense'
            id='type'
            name='type'
            label='Type'
            value={formik.values.type || ""}
            onChange={formik.handleChange}
            error={Boolean(hasSubmit || formik.values.type ? formik.errors.type : false)}
            helperText={hasSubmit || formik.values.type ? formik.errors.type : ""}
          />
        </FormControl>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            sx={{ mx: "auto", width: 200, margin: 2 }}
            variant='contained'
            color='secondary'
            onClick={() => navigate("/admin")}
          >
            Cancel
          </Button>
          <Button
            sx={{ mx: "auto", width: 200, margin: 2 }}
            variant='contained'
            color='primary'
            type='submit'
          >
            Save
          </Button>
        </Box>
      </form>
    </Container>
  );
};
