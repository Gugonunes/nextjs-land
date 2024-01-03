interface ButtonProps {
  label: string
  onClick?: () => void
  tipo: 'primary' | 'secondary'
  extraClasses: string
}

const Button: React.FC<ButtonProps> = ({ label, onClick, tipo, extraClasses }) => {
  let buttonClasses = 'px-4 py-2 rounded cursor-pointer outline-none uppercase'

  if (tipo === 'primary') {
    buttonClasses += ' bg-laranja text-white '
  } else if (tipo === 'secondary') {
    buttonClasses += ' bg-verde text-white '
  }
  buttonClasses += extraClasses 

  return (
    <button className={buttonClasses} onClick={onClick} type="submit">
      {label}
    </button>
  )
}

export default Button