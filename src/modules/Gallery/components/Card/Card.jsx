import RoundedButton from 'components/RoundedButton/RoundedButton';
import './Card.scss';

const Card = ({ title, duration, img }) => {
  return (
    <article className='card'>
      <div className='card__info'>
        <div className='card__textblock'>
          <h2 className='card__title'>{title}</h2>
          <p className='card__duration'>{duration}</p>
        </div>
        <RoundedButton>
          Ы
        </RoundedButton>
      </div>
      <img alt='' src={img} className='card__img' />
    </article>
  );
};

export default Card;
