import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  "confirm-password": Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
  "first-name": Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  "last-name": Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  role: Yup.string().required("Required"),
  acquisition: Yup.array()
    .min(1, "Select at least one option")
    .required("Required"),
  terms: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("Required"),
});