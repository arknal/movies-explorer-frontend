import './RoundedButton.scss';

const RoundedButton = ({ children, onClick, ...props }) => {
  return (
    <button {...props} className='rounded-btn'>
      {children}
    </button>
  );
};

export default RoundedButton;