interface Props {
  label: string
  type: "button" | "submit" | "reset"
  disabled?: boolean
  onClick?: () => void
  className?: string
}

function MainButton({
  label,
  type = "button",
  disabled = false,
  onClick,
  className = "",
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`mx-auto block bg-pink px-[63px] py-[11px] text-2xl font-bold text-light ${className} disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {label}
    </button>
  )
}

export default MainButton
