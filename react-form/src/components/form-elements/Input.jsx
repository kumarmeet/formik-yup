import { Field } from "formik";
import React from "react";

export default function Input({
  errors,
  touched,
  label,
  htmlFor,
  className,
  errorTextColor,
  ...props
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor}>{label}</label>
      <Field {...props} />
      {errors && touched ? (
        <div style={{ color: errorTextColor }}>{errors}</div>
      ) : null}
    </div>
  );
}
