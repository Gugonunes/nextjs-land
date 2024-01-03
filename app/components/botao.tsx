interface ButtonProps {
  label: string
  onClick?: () => void
  tipo: 'primary' | 'secondary'
  extraClasses: string
}

const Button: React.FC<ButtonProps> = ({ label, onClick, tipo, extraClasses }) => {
  let buttonClasses = 'px-4 py-2 rounded cursor-pointer outline-none uppercase hover:opacity-70 transition-all duration-300 ease-in-out '
  let linkClasses = 'uppercase block w-full'
  buttonClasses += extraClasses 
  if (tipo === 'primary') {
    buttonClasses += ' bg-laranja text-white '
    return (
      <button className={buttonClasses} onClick={onClick} type="submit">
        {label}
      </button>
    )
  } else if (tipo === 'secondary') {
    buttonClasses += ' bg-verde text-white '
    return (
      <button className={buttonClasses} onClick={onClick} type="submit">
        <a className={linkClasses} href="https://api.whatsapp.com/send?phone=+62994066070&text=Oi, gostária de mais informações sobre os planos Opyt">{label}</a>
      </button>
    )
  }

}

export default Button