import {Form, Field, Formik} from "formik";
import './formik-form.scss';

export default function FormikForm() {
    const submitForm = (values) => {
        console.log(values);
    }
    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    surName: '',
                }}
                onSubmit={submitForm}>
                <Form className='form'>
                    <span>First Name</span>
                    <Field type='text' name='firstName'/>
                    <span>Surname</span>
                    <Field type='text' name='surtName'/>
                    <button type='submit'>Sign in</button>

                </Form>
            </Formik>
        </>
    );
}
