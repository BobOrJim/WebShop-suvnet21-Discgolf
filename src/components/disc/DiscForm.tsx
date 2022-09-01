import { useFormik } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import { Disc, DiscCreate } from "./disc";

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
    onSubmit: (values) => {
      if (props.disc) {
        console.log("update", values);
      } else {
        console.log("create", values);
      }
      // TODO: Save product to state/api
      console.log("ON SUBMIT", values);
    },
  });

  //console.log(formik.touched.name);
  //console.log(formik.errors.name);

  return (
    <>
      <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={formik.values.name} onChange={(e) => formik.setFieldValue("name", e.target.value)} />
        <div>{formik.errors.name}</div>
      </form>
    </>
  );
};
