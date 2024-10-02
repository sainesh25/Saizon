"use client"
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { login } from '../service/api';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';


interface FormValues {
    email: string,
    password: string,
}

export default function Login(): JSX.Element {
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const router = useRouter();

    const formik = useFormik<FormValues>({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        async onSubmit(values: FormValues, { resetForm }: { resetForm: () => void }) {
            try {
                const response = await login(values);
                // console.log(response);
                if (response?.status === 200) {
                    resetForm();
                    toast.success('Login Successful');
                    router.push('/');
                }

            } catch (err) {
                console.log(err);
                let errorMessage = 'Error Occured';
                if (err instanceof AxiosError) {
                    errorMessage = err?.response?.data?.message || err?.message || errorMessage
                }

                toast.error(`Error: ${errorMessage}`)
            }
        },

    })
    const { handleSubmit, handleChange, handleBlur } = formik;

    return (
        <div className="flex bg-gray-50 justify-center items-center min-h-screen">
            <div className="bg-white p-8 w-2/5 mx-auto rounded-3xl shadow-md">
                <div className="text-center">
                    <h1 className="text-4xl">Login</h1>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col">
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
                    <input type="submit" className="py-2 bg-darkGray rounded-md text-white mt-4" value="Login" />
                </form>
                <p className="text-center mt-3 text-darkGray text-sm">Not a member? <Link href={'/register'} className="text-blue-600">Register</Link></p>

            </div>

        </div>)

}
