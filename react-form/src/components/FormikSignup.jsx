import React from "react";
import { Form, Formik } from "formik";
import Input from "./form-elements/Input";
import Options from "./form-elements/Options";
import Checkbox from "./form-elements/Checkbox";
import { selectOptionsOfSignup } from "../utils/signup-options";
import { SignupSchema } from "../validations/sign-up";

const FormikSignup = () => (
  <div>
    <Formik
      initialValues={{
        email: "",
        password: "",
        "confirm-password": "",
        "first-name": "",
        "last-name": "",
        role: "",
        acquisition: [],
        terms: false,
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Form Values:", values);
        setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <h2>Welcome on board!</h2>
          <p>
            We just need a little bit of data from you to get you started 🚀
          </p>

          <Input
            className="control"
            label="Email"
            htmlFor="email"
            id="email"
            type="email"
            name="email"
            errorTextColor="#FF474c"
            errors={errors.email}
            touched={touched.email}
          />

          <div className="control-row">
            <Input
              className="control"
              htmlFor="password"
              label="Password"
              id="password"
              type="password"
              name="password"
              errorTextColor="#FF474c"
              errors={errors.password}
              touched={touched.password}
            />

            <Input
              className="control"
              htmlFor="confirm-password"
              label="Confirm Password"
              id="confirm-password"
              type="password"
              name="confirm-password"
              errorTextColor="#FF474c"
              errors={errors["confirm-password"]}
              touched={touched["confirm-password"]}
            />
          </div>

          <hr />

          <div className="control-row">
            <Input
              className="control"
              htmlFor="first-name"
              label="First Name"
              id="first-name"
              type="text"
              name="first-name"
              errorTextColor="#FF474c"
              errors={errors["first-name"]}
              touched={touched["first-name"]}
            />
            <Input
              className="control"
              htmlFor="last-name"
              label="First Name"
              id="last-name"
              type="text"
              name="last-name"
              errorTextColor="#FF474c"
              errors={errors["last-name"]}
              touched={touched["last-name"]}
            />
          </div>

          <Options
            className="control"
            htmlFor="role"
            label="What best describes your role?"
            as="select"
            id="role"
            name="role"
            options={selectOptionsOfSignup}
            errorTextColor="#FF474c"
            errors={errors.role}
            touched={touched.role}
          />

          <fieldset>
            <legend>How did you find us?</legend>
            <Checkbox
              className="control"
              htmlFor="google"
              label="Goole"
              type="checkbox"
              id="google"
              name="acquisition"
              value="google"
            />

            <Checkbox
              className="control"
              htmlFor="friend"
              label="Referred by friend"
              type="checkbox"
              id="friend"
              name="acquisition"
              value="friend"
            />

            <Checkbox
              className="control"
              htmlFor="other"
              label="Other"
              type="checkbox"
              id="other"
              name="acquisition"
              value="other"
              errorTextColor="#FF474c"
              errors={errors.acquisition}
              touched={touched.acquisition}
            />
          </fieldset>

          <Checkbox
            className="control"
            htmlFor="terms-and-conditions"
            label="I agree to the terms and conditions"
            type="checkbox"
            id="terms-and-conditions"
            name="terms"
            errorTextColor="#FF474c"
            errors={errors.terms}
            touched={touched.terms}
          />

          <p className="form-actions">
            <button
              type="reset"
              className="button button-flat"
            >
              Reset
            </button>
            <button
              type="submit"
              className="button"
            >
              Sign up
            </button>
          </p>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormikSignup;
