import { useFormik } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import { useProductContext } from "../../context/ProductContext";
import { ProductCreate, StoreItem } from "../StoreItem";

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
  product: StoreItem;
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
        const editedProduct: Product = {
          id: props.product.id,
          ...values,
        };
        replaceProduct(editedProduct);
      } else {
        addProduct(values);
      }
      console.log("ON SUBMIT");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
      <input type="hidden" name="id" value={props.product ? props.product.id : ""} />

      <input
        placeholder="name"
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      {formik.errors.name}

      <input
        placeholder="brand"
        type="text"
        name="brand"
        value={formik.values.brand}
        onChange={formik.handleChange}
      />
      {formik.errors.brand}

      <input
        placeholder="speed"
        type="number"
        name="speed"
        value={formik.values.speed}
        onChange={formik.handleChange}
      />
      {formik.errors.speed}

      <input
        placeholder="glide"
        type="number"
        name="glide"
        value={formik.values.glide}
        onChange={formik.handleChange}
      />
      {formik.errors.glide}

      <input
        placeholder="turn"
        type="number"
        name="turn"
        value={formik.values.turn}
        onChange={formik.handleChange}
      />
      {formik.errors.turn}

      <input
        placeholder="fade"
        type="number"
        name="fade"
        value={formik.values.fade}
        onChange={formik.handleChange}
      />
      {formik.errors.fade}

      <input
        placeholder="weight"
        type="number"
        name="weight"
        value={formik.values.weight}
        onChange={formik.handleChange}
      />
      {formik.errors.weight}

      <input
        placeholder="color"
        type="text"
        name="color"
        value={formik.values.color}
        onChange={formik.handleChange}
      />
      {formik.errors.color}

      <input
        placeholder="imageUrl"
        type="text"
        name="imageUrl"
        value={formik.values.imageUrl}
        onChange={formik.handleChange}
      />
      {formik.errors.imageUrl}

      <input
        placeholder="price"
        type="number"
        name="price"
        value={formik.values.price}
        onChange={formik.handleChange}
      />
      {formik.errors.price}

      <input
        placeholder="type"
        type="text"
        name="type"
        value={formik.values.type}
        onChange={formik.handleChange}
      />
      {formik.errors.type}

      <button type="submit">Submit</button>
    </form>
  );
};
