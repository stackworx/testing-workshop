import React, {Component} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(6, 'Password has to be longer than 6 characters!')
    .required(),
});

interface Props {
  handleSubmit: (opts: {email: string; password: string}) => Promise<void>;
}

export class Login extends Component<Props> {
  render() {
    const {handleSubmit} = this.props;

    return (
      <div style={{padding: 20}}>
        <Formik
          validationSchema={validationSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={async (values, {setSubmitting}) => {
            try {
              handleSubmit(values);
              setSubmitting(false);
            } catch (ex) {
              setSubmitting(false);
            }
          }}
        >
          {({isSubmitting}) => (
            <Form>
              Email:
              <Field type="email" name="email" /> <br />
              <ErrorMessage name="email" component="div" />
              <br />
              Password:
              <Field type="password" name="password" />
              <br />
              <ErrorMessage name="password" component="div" />
              <br />
              {isSubmitting && <div>Submitting...</div>}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
