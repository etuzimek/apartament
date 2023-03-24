import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

const ContactForm = () => (
  <div>
    <h1>Formularz kontaktowy</h1>
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", subject: "", message: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = "Pole wymagane";
        }
        if (!values.lastName) {
          errors.lastName = "Pole wymagane";
        }
        if (!values.email) {
          errors.email = "Pole wymagane";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Nieprawidłowy adres e-mail";
        }
        if (!values.subject) {
          errors.subject = "Pole wymagane";
        }
        if (!values.message) {
          errors.message = "Pole wymagane";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="firstName">Imię:</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="div" />
          </div>
          <div>
            <label htmlFor="lastName">Nazwisko:</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="div" />
          </div>
          <div>
            <label htmlFor="email">Adres e-mail:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="subject">Temat:</label>
            <Field type="text" name="subject" />
            <ErrorMessage name="subject" component="div" />
          </div>
          <div>
            <label htmlFor="message">Wiadomość:</label>
            <Field as="textarea" name="message" />
            <ErrorMessage name="message" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Wyślij
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default ContactForm;
