import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
    title: Yup.string().required("Required!"),
    author: Yup.string().required("Required!"),
    price: Yup.string().required("Required!"),
});

const AddBook = ({onSubmit}: {onSubmit:any}) => {
    return (
        <Formik 
            initialValues={{title: "", author: "", price: ""}}
            onSubmit={(values) => {onSubmit(values)}} 
            validationSchema={formSchema}
            render= {() => (
                <Form>
                    <Field type="text" name="title" />
                    <ErrorMessage name="title" component="div" />
                    <Field type="text" name="author" />
                    <ErrorMessage name="author" component="div" />
                    <Field type="text" name="price" />
                    <ErrorMessage name="price" component="div" />
                    <button type="submit">Submit</button>
                </Form>
            )} 
        />
    );
}

export default AddBook;