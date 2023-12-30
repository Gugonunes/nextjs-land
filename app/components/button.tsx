interface ButtonProps {
  label: string;
  onClick?: () => void;
  type: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type }) => {
  let buttonClasses = 'px-4 py-2 rounded cursor-pointer outline-none uppercase';

  if (type === 'primary') {
    buttonClasses += ' bg-orange-500 text-white';
  } else if (type === 'secondary') {
    buttonClasses += ' bg-green-500 text-white';
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;