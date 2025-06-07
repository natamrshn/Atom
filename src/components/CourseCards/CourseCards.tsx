import Button from '../Button/Button';
import { Card, type CardData} from '../ui/Card/Card';
import './CourseCards.scss';

const cardData: CardData = {
    title: 'Affiliate marketing',
    description:
      'Отримайте професію Affiliate-маркетолога і заробляйте на арбітражі трафіку',
    imageSrc: '/src/assets/images/card-image.png',
    buttonText: 'Перейти до модулів',
  };

export const CourseCards = () => {
  const buttonText = 'Показати Ще';

  return (
    <div className="course__cards">
      <div className="cards__list">
        <Card card={cardData} />
        <Card card={cardData} />
        <Card card={cardData} />
        <Card card={cardData} />
        <Card card={cardData} />
        <Card card={cardData} />
      </div>
      <div className='course__button'>
        <Button children={buttonText} variant={'secondary'} filled={false}/>
      </div>
    </div>
  );
};
