import { Field } from "formik";
import React from "react";

export default function Options({
  errors,
  touched,
  label,
  htmlFor,
  className,
  options,
  errorTextColor,
  ...props
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor}>{label}</label>
      <Field {...props}>
        {options.map((d, idx) => {
          return (
            <option
              key={idx}
              {...props}
              value={d.value}
              label={d.label}
            />
          );
        })}
      </Field>
      {errors && touched ? (
        <div style={{ color: errorTextColor }}>{errors}</div>
      ) : null}
    </div>
  );
}
