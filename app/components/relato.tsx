interface RelatoProps {
  name: string;
  score: string;
  text: string;
  image: string;
}

const Relato = (props: RelatoProps) => {
  let classes =
    "flex flex-col items-center justify-center border border-4 border-solid border-orange-500 rounded-[30px] p-4 max-w-[255px]";

  return (
    <div className={classes}>
      <div className="flex">
        <img
          className="max-w-[120px] max-h-[120px] flex-1"
          src={props.image}
          alt="Logo"
        />
        <div>
          <img
            className="max-w-[100px] max-h-[20px] flex-1"
            src={props.score}
            alt="score"
          />
          <p className="text-orange-500">{props.name}</p>
        </div>
      </div>
      <p className="text-black">{props.text}</p>
    </div>
  );
};

export default Relato;
