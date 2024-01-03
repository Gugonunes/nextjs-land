interface RedeSocialButtonProps {
  label: string
  icone: string
}

const RedeSocialBotao: React.FC<RedeSocialButtonProps> = ({ label, icone }) => {
  let classesBotao = 'rounded cursor-pointer outline-none uppercase inline-flex'
  let alt = 'Botão do ' + label
  return (
    <button className={classesBotao}>
      <img src={icone} alt={alt} className="w-full h-full" />
    </button>
  )
}

export default RedeSocialBotao;