import React from 'react';
import { Form, Field, Formik } from 'formik';
import './formik-form.scss';

export default function FormikForm() {
    const submitForm = (values) => {
        console.log(values);
    };

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !value || emailRegex.test(value)
            ? undefined
            : 'Некоректний формат email';
    };

    const validatePhone = (value) => {
        const phoneRegex = /^\d{12}$/;
        return !value || phoneRegex.test(value)
            ? undefined
            : 'Тільки цифри та довжина 12';
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
                        <span>e-mail</span>
                        <Field type='text' name='eMail' validate={validateEmail} />
                        <span>Tel.</span>
                        <Field type='text' name='telNumber' validate={validatePhone} />
                        <button type='submit'>Sign in</button>
                    </Form>
                </Formik>
            </div>
        </>
    );
}
