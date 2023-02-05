import Switch from 'components/Switch/Switch';
import Form from './components/Form/Form';
import Input from './components/Input/Input';

const SearchForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input />
      <div className='search-form__filter'>
        <Switch />
        <p className='search-form__text'>Короткометражки</p>
      </div>
    </Form>
  );
};

export default SearchForm;
