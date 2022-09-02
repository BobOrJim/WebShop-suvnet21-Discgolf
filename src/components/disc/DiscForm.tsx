import { useFormik } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import { Disc, DiscCreate } from "./disc";
import { useDiscContext } from "../../context/DiscsContext";

type DiscRecord = Record<keyof DiscCreate, Yup.AnySchema>;

const DiscSchema = Yup.object().shape<DiscRecord>({
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

interface DiscCardProps {
  disc: Disc;
}

export const DiscForm: FC<DiscCardProps> = (props: DiscCardProps): JSX.Element => {
  const { replaceDisc, addDisc } = useDiscContext();
  const formik = useFormik<DiscCreate>({
    initialValues: props.disc || {
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
    validationSchema: DiscSchema,
    onSubmit: (values: DiscCreate) => {
      if (props.disc) {
        const editedDisc: Disc = {
          id: props.disc.id,
          ...values,
        };
        replaceDisc(editedDisc);
      } else {
        addDisc(values);
      }
      console.log("ON SUBMIT");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
      <input type="hidden" name="id" value={props.disc ? props.disc.id : ""} />

      <input placeholder="name" type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
      {formik.errors.name}

      <input placeholder="brand" type="text" name="brand" value={formik.values.brand} onChange={formik.handleChange} />
      {formik.errors.brand}

      <input placeholder="speed" type="number" name="speed" value={formik.values.speed} onChange={formik.handleChange} />
      {formik.errors.speed}

      <input placeholder="glide" type="number" name="glide" value={formik.values.glide} onChange={formik.handleChange} />
      {formik.errors.glide}

      <input placeholder="turn" type="number" name="turn" value={formik.values.turn} onChange={formik.handleChange} />
      {formik.errors.turn}

      <input placeholder="fade" type="number" name="fade" value={formik.values.fade} onChange={formik.handleChange} />
      {formik.errors.fade}

      <input placeholder="weight" type="number" name="weight" value={formik.values.weight} onChange={formik.handleChange} />
      {formik.errors.weight}

      <input placeholder="color" type="text" name="color" value={formik.values.color} onChange={formik.handleChange} />
      {formik.errors.color}

      <input placeholder="imageUrl" type="text" name="imageUrl" value={formik.values.imageUrl} onChange={formik.handleChange} />
      {formik.errors.imageUrl}

      <input placeholder="price" type="number" name="price" value={formik.values.price} onChange={formik.handleChange} />
      {formik.errors.price}

      <input placeholder="type" type="text" name="type" value={formik.values.type} onChange={formik.handleChange} />
      {formik.errors.type}

      <button type="submit">Submit</button>
    </form>
  );
};
