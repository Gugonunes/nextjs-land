interface CardProps {
  texto: string
  imagem: string
}

const Card = (props: CardProps) => {
  let classes = 'flex flex-col items-center justify-center max-w-[250px] gap-y-2 p-4 mx-auto'

  return (
    <div className={classes}>
      <img src={props.imagem} alt="Logo" />
      <p className="text-white font-bold text-center text-2xl">{props.texto}</p>
    </div>
  )
}

export default Card