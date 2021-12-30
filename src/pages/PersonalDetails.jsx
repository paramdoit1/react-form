import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import TextError from "../components/TextError"

const initialValues = {
  name: '',
  email: '',
  occupation: '',
  social: {
      facebook: '',
      twitter: ''   
  }
};

const submitData = (values) => {
  console.log("values: ", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email required"),
  occupation: Yup.string().required("Occupation Required"),
  facebook: Yup.string().required("facebook Required"),
  twitter: Yup.string().required("twitter Required"),
});

const PersonalDetails = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitData}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="field-control">
          <label htmlFor="name"> Name </label>
          <Field type="text" id="name" name="name"></Field>
          <ErrorMessage name="name" component = {TextError}/>
        </div>

        <div className="field-control">
          <label htmlFor="email"> Email</label>
          <Field type="email" id="email" name="email"></Field>
          <ErrorMessage name="email"  component = {TextError} />
            </div>

        <div className="field-control">
          <label htmlFor="occupation"> Occupation</label>
          <Field type="text" id="occupation" name="occupation"></Field>
          <ErrorMessage name="occupation"   component = "div" className="error" />  
        </div>

        <div className="field-control">
          <label htmlFor="facebook"> facebook Profile</label>
             <Field type="text" id="facebook" name="social.facebook"></Field>
        </div>
        <div className="field-control">
          <label htmlFor="twitter">Twitter</label>
          <Field type="text" id="twitter" name="social.twitter"></Field>
        </div>

        <button type="submit"> Submit</button>
      </Form>
    </Formik>
  );
};

export default PersonalDetails;
