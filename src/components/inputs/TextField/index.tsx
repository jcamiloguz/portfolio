import { ErrorMessage, useField } from "formik"

interface Props {
  name: string
  label: string
  type: "email" | "password" | "text"
  placeholder: string
}

function TextField({ name, label, type, placeholder }: Props) {
  const [field] = useField(name)

  return (
    <>
      <label
        htmlFor={name}
        className="text-gray-700 mb-2 block  text-xl text-light"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={field.value}
        onChange={field.onChange}
        placeholder={placeholder}
        onBlur={field.onBlur}
        className="w-full border-b-[3px] border-b-pink bg-light px-3 py-2 text-base text-dark outline-none  "
      />
      <ErrorMessage name={name} component="span" className="text-pink" />
    </>
  )
}

export default TextField
