import React from "react";
import { useFormik } from "formik";

import * as Yup from 'yup';

const initialValues = {
  name: "",
  email: "",
  occupation: "",
};

const onSubmit = (values) => {
  console.log("values: ", values);
};

/* const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = "Invalid email format"           
  }
  if (!values.occupation) {
    errors.occupation = "Required";
  }

  return errors;
}; */

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email required'),
    occupation: Yup.string().required('Occupation Required')
});

const PersonalDetails = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    //validate,
    validationSchema
  });

  console.log('visited fields: ', formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className= "field-control">
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur}
            value={formik.values.name}
          ></input>
          {formik.touched.name && formik.errors.name ? <div className= "error"> {formik.errors.name} </div> : null}
        </div>

        <div  className= "field-control">
          <label htmlFor="email"> Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur}
            value={formik.values.email}
          ></input>
          { formik.touched.email && formik.errors.email ? <div className= "error"> {formik.errors.email} </div> : null}
        </div>

        <div  className= "field-control">
          <label htmlFor="occupation"> Occupation</label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            onChange={formik.handleChange}
            onBlur = {formik.handleBlur}
            value={formik.values.occupation}
          ></input>
          {formik.touched.occupation && formik.errors.occupation ? <div className= "error"> {formik.errors.occupation} </div> : null}
        </div>

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default PersonalDetails;
