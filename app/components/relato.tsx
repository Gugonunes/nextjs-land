interface RelatoProps {
  name: string;
  score: string;
  text: string;
  image: string;
}

const Relato = (props: RelatoProps) => {
  let classes = 'flex flex-col items-center justify-center border border-solid border-orange rounded-lg p-4';

  return (
    <div className={classes}>
      <img src={props.image} alt="Logo" />
      <img src={props.score} alt="score" />
      <p className="text-white">{props.text}</p>
    </div>
  );
}

export default Relato;