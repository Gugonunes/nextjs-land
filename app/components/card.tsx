interface CardProps {
  text: string;
  image: string;
}

const Card = (props: CardProps) => {
  let classes = 'flex flex-col items-center justify-center';

  return (
    <div className={classes}>
      <p className="text-white">{props.text}</p>
      <img src={props.image} alt="Logo" />
    </div>
  );
}

export default Card;