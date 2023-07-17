import { ErrorMessage, useField } from "formik"

interface Props {
  name: string
  label: string
  type: "email" | "password" | "text"
  placeholder: string
}

function TextField({ name, label, type }: Props) {
  const [field] = useField(name)

  return (
    <>
      <label htmlFor={name} className="text-gray-700 block text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
      />
      <ErrorMessage name={name} component="span" className="text-red-500" />
    </>
  )
}

export default TextField
