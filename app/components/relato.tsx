interface RelatoProps {
  nome: string
  nota: string
  texto: string
  imagem: string
}

const Relato = (props: RelatoProps) => {
  let classes =
    "flex flex-col items-center border border-4 border-solid border-orange-500 rounded-[30px] p-2 py-4 max-w-[255px] mx-auto mb-[15px] min-h-[455px]"

  return (
    <div className={classes}>
      <div className="flex">
        <img
          className="max-w-[120px] max-h-[120px] flex-1"
          src={props.imagem}
          alt="Foto de pessoa"
        />
        <div className="grid grid-rows-3 items-center pl-[10px]">
          <img
            className="max-w-[100px] max-h-[20px] flex-1 self-end"
            src={props.nota}
            alt="Nota"
          />
          <p className="text-orange-500 text-2xl row-span-2">{props.nome}</p>
        </div>
      </div>
      <p className="text-black leading-4 p-3 text-sm">{props.texto}</p>
    </div>
  )
}

export default Relato
