"use client"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signIn } from "next-auth/react";

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Неверный адрес электронной почты').required('Обязательное поле'),
  password: Yup.string().required('Обязательное поле'),
});

export function LoginForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={async (data) => {
        await signIn("credentials", { ...data, redirect: false });
      }}
    >
      {() => (
        <Form>
          <Field className="email" name="email" placeholder="Email" />

          <ErrorMessage className='' name="email" component="div" />

          <Field name="password" type="password" placeholder="Password" />

          <ErrorMessage name="password" component="div" />
          <button type="submit">Log In</button>
        </Form>
      )}
    </Formik>
  );
}