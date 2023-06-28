import * as React from 'react';
import {useFormik} from "formik";
import * as yup from "yup";


export function Basicform() {

const formValidationSchema = yup.object({
  password : yup.string().min(5, "need a longer password").max(10,"too much password").required(),
   email : yup.string().min(5, "need a longer email").max(10,"too much email").required(),
})


  const formik = useFormik({
    initialValues:{email:"", password:""},
    validationSchema : formValidationSchema,
    onSubmit: (values)  => {
      console.log("onsubmit",values);
    }
  })



  return (
    <div>
     
      <form onSubmit={formik.handleSubmit}>


        <input id='email' name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" placeholder='email'/> <br/>
        {formik.errors.email}
        <br/>
        <input id="password" name="password" value={formik.values.password}  onChange={formik.handleChange}  onBlur={formik.handleBlur} type="password" placeholder='password'/>
        <br/>
        {/* {formik.errors.password} */}
        {formik.touched.password && formik.errors.password ? formik.errors.password : " "}
        <br/>
        <button> Submit</button>


      </form>
    </div>
  );
}
