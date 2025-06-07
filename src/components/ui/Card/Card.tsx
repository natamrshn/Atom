import Button from '../../Button/Button';
import './Card.scss';

export type CardData = {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
};

type CardProps = {
  card: CardData;
};

export const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="card">
      <div className="card__header-img">
        <img src={card.imageSrc} alt={card.title} />
      </div>
      <div className="card__title">
        <h3 className="title__text">{card.title}</h3>
      </div>
      <div className="card__body">
        <p className="body__text">{card.description}</p>
      </div>
      <div className="card__footer">
        <Button
          children={card.buttonText}
          variant={'primary'}
          filled={true}
        />
      </div>
    </div>
  );
};
