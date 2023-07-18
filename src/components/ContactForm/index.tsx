import { Form, Formik } from "formik"
import * as yup from "yup"
import TextField from "../inputs/TextField"
import TextAreaField from "../inputs/TextAreaField"
import MainButton from "../MainButton"

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
      {({ dirty, isValid }) => (
        <Form className="mx-auto w-full max-w-[638px]">
          <div>
            <TextField
              name="name"
              label="Name*:"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="mt-[20px]">
            <TextField
              name="email"
              label="Email*:"
              type="email"
              placeholder="email@mail.com"
            />
          </div>
          <div className="mt-[20px]">
            <TextAreaField
              name="message"
              label="Message*:"
              placeholder="Hello, I would like to build something amazing... "
            />
          </div>
          <MainButton
            label="Send"
            type="submit"
            disabled={!dirty || !isValid}
            className="mt-8"
          />
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
