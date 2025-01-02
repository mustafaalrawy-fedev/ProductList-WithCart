import './totalPrice.scss';

const TotalPrice = ({ totalPrice }) => {
  return (
    <>
      <div className='order-total'>
        <span>Order Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </>
  );
};

export default TotalPrice;
