import { ChevronDown, ChevronUp } from '../../utils/icons';

const CardItem = ({ id, title, price, img, amount }) => {
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button className='remove-btn'>remove</button>
      </div>
      <div>
        <button className='amount-btn'>
          <ChevronUp />
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn'>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CardItem;
