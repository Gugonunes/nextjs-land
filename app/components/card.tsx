interface CardProps {
  text: string;
  image: string;
}

const Card = (props: CardProps) => {
  let classes = 'flex flex-col items-center justify-center w-1/3';

  return (
    <div className={classes}>
      <img src={props.image} alt="Logo" />
      <p className="text-white">{props.text}</p>
    </div>
  );
}

export default Card;