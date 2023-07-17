import { Form, Formik } from "formik"
import * as yup from "yup"
import TextField from "../inputs/TextField"

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
})

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={(e) => {
        console.log("submit")
      }}
    >
      {({ dirty }) => (
        <Form>
          <TextField
            name="name"
            label="Name"
            type="text"
            placeholder="John Doe"
          />
          <TextField name="email" label="Email" type="email" placeholder="" />
          <TextField
            name="message"
            label="Message"
            type="text"
            placeholder="Hello, I would like to..."
          />
          <button type="submit" disabled={!dirty}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
