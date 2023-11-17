import React from 'react';
import { Form, Field, Formik } from 'formik';
import './formik-form.scss';

export default function FormikForm() {
    const submitForm = (values) => {
        console.log(values);
    };

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value)
            ? undefined
            : 'Invalid email format';
    };

    const validatePhone = (value) => {
        const phoneRegex = /^\d{12}$/;
        return phoneRegex.test(value)
            ? undefined
            : 'Only digits allowed and length must be 12';
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
                    <Form className='form'>
                        <span>First Name</span>
                        <Field type='text' name='firstName' />
                        <span>Surname</span>
                        <Field type='text' name='surName' />
                        <span>Email</span>
                        <Field type='text' name='eMail' validate={validateEmail} />
                        <span>Phone</span>
                        <Field type='text' name='telNumber' validate={validatePhone} />
                        <button type='submit'>Sign in</button>
                    </Form>
                </Formik>
            </div>
        </>
    );
}
