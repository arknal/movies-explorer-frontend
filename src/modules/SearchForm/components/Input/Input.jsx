import RoundedButton from 'components/RoundedButton/RoundedButton';
import SearchIcon from '../SearchIcon/SearchIcon';
import './Input.scss';

const Input = () => {
  return (
    <div className='search-form__input-container'>
      <input
        id='search-form__input'
        className='search-form__input'
        placeholder='Фильм'
      />
      <label htmlFor='search-form__input' className='search-form__label'>
        <SearchIcon />
      </label>
      <RoundedButton type='submit'>
        <SearchIcon white />
      </RoundedButton>
    </div>
  );
};

export default Input;
