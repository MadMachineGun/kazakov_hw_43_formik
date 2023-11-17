import React, { useState } from 'react';
import { Form, Field, Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './formik-form.scss';

export default function FormikForm() {
    const [isSubmitted, setSubmitted] = useState(false);

    const submitForm = (values, { resetForm }) => {

        setSubmitted(true);
        resetForm();
        toast.success('Registration successful! Thank you.');
    };

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
            return 'Email is required';
        } else if (!emailRegex.test(value)) {
            return 'Invalid email format';
        }
        return undefined;
    };

    const validatePhone = (value) => {
        const phoneRegex = /^\+380\d{9}$/;
        if (!value) {
            return 'Phone is required';
        } else if (!phoneRegex.test(value)) {
            return 'Invalid phone format. Please use +380000000000';
        }
        return undefined;
    };

    const handleCloseSuccess = () => {
        setSubmitted(false);
    };

    return (
        <>
            <div className='form'>
                <Formik
                    initialValues={{
                        firstName: '',
                        surName: '',
                        eMail: '',
                        telNumber: '',
                    }}
                    onSubmit={submitForm}>
                    {(formik) => (
                        <Form className='form'>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name:</label>
                                <Field type='text' name='firstName' />
                                {formik.touched.firstName && !formik.values.firstName ? (
                                    <div className="error">Name is required!</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="surName">Surname:</label>
                                <Field type='text' name='surName' />
                                {formik.touched.surName && !formik.values.surName ? (
                                    <div className="error">Surname is required!</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="eMail">Email:</label>
                                <Field type='text' name='eMail' placeholder="example@example.com" validate={validateEmail} />
                                {formik.touched.eMail && formik.errors.eMail ? (
                                    <div className="error">{formik.errors.eMail}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="telNumber">Phone:</label>
                                <Field type='text' name='telNumber' placeholder="+380000000000" validate={validatePhone} />
                                {formik.touched.telNumber && formik.errors.telNumber ? (
                                    <div className="error">{formik.errors.telNumber}</div>
                                ) : null}
                            </div>
                            {isSubmitted ? (
                                <button type='button' onClick={handleCloseSuccess}>Close</button>
                            ) : (
                                <button type='submit'>Sign in</button>
                            )}
                        </Form>
                    )}
                </Formik>
                <ToastContainer />
            </div>
        </>
    );
}
