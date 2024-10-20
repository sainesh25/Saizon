"use client";
import { useFormik } from "formik";
import React from "react";
import { register } from "../service/api";
import * as Yup from 'yup';
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
  // console.log('hello');
  const router = useRouter();
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string().min(4, 'Password must be atleast 4 characters long').required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await register(values);
        console.log(response);
        if (response?.status === 200) {
          toast.success('Registration Successfull');
          resetForm();
          router.push('/login');
        }
      }
      catch (err) {
        console.log(err);
      }
    },

  })

  const { handleSubmit, handleChange, handleBlur } = formik;

  return (
    <div className="flex bg-gray-50 justify-center items-center min-h-screen">
      <div className="bg-white p-8 w-2/5 mx-auto rounded-3xl shadow-md">
        <div className="text-center">
          <h1 className="text-4xl">Register</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="w-full mt-4">
            <input
              className="w-full p-2 rounded-md border"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter Name"
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? <div className="text-red-600 text-xs">{formik.errors.name}</div> : null}

          </div>
          <div className="w-full mt-4">
            <input
              className="w-full p-2 rounded-md border"
              name="email"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formik.values.email}
              placeholder="Enter Email"
            />
            {formik.touched.email && formik.errors.email ? <div className="text-red-600 text-xs">{formik.errors.email}</div> : null}
          </div>
          <div className="w-full mt-4">
            <input
              className="w-full p-2 rounded-md border"
              name="password"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formik.values.password}
              placeholder="Enter Password"
            />
            {formik.touched.password && formik.errors.password ? <div className="text-red-600 text-xs">{formik.errors.password}</div> : null}
          </div>
          <input type="submit" className="py-2 bg-darkGray rounded-md text-white mt-4" value="Register" />
        </form>
        <p className="text-center mt-3 text-darkGray text-sm">Already a registered? <Link href={'/login'} className="text-blue-600">Login</Link></p>

      </div>

    </div>)
};

export default Register;
