import './Form.scss';

const Form = ({ onSubmit, children }) => {
  return (
    <form className='search-form' onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
