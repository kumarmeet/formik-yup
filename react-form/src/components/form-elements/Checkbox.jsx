import { Field } from "formik";
import React from "react";

export default function Checkbox({
  errors,
  touched,
  label,
  htmlFor,
  className,
  errorTextColor,
  ...props
}) {
  return (
    <>
      <div className={className}>
        <Field {...props} />
        <label htmlFor={htmlFor}>{label}</label>
      </div>
      {errors && touched ? (
        <div style={{ color: errorTextColor }}>{errors}</div>
      ) : null}
    </>
  );
}
