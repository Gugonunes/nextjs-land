interface RedeSocialButtonProps {
  label: string
  icone: string
  link: string
}

const RedeSocialBotao: React.FC<RedeSocialButtonProps> = ({ label, icone, link }) => {
  let classesBotao = 'rounded cursor-pointer outline-none uppercase inline-flex'
  let alt = 'Botão do ' + label
  return (
    <button className={classesBotao}>
      <a href={link} target="_blank">
        <img src={icone} alt={alt} className="w-full h-full" />
      </a>
    </button>
  )
}

export default RedeSocialBotao;