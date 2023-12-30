interface RedeSocialButtonProps {
  label: string;
  icon: string;
}

const RedeSocialButton: React.FC<RedeSocialButtonProps> = ({ label, icon }) => {
  let buttonClasses = 'px-4 py-2 rounded cursor-pointer outline-none uppercase';

  return (
    <button className={buttonClasses}>
      <img src={icon} alt="Logo" />
      {label}
    </button>
  );
};

export default RedeSocialButton;