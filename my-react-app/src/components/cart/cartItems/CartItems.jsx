import removeIcon from '/assets/icons/icon-remove-item.svg';
import carbonNeutral from '/assets/icons/icon-carbon-neutral.svg';
import './cartItems.scss';
import TotalPrice from '../../totalPrice/TotalPrice';

const CartItems = ({
  handleRemoveFromCart,
  cartItem,
  handleOpenModal,
  totalPrice,
}) => {
  return (
    <>
      <div className='chosen-product'>
        {cartItem.map((item) => {
          const { id, name, price, quantity } = item;
          return (
            <div key={id} className='products'>
              <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p className='price-and-quantity'>
                  <span className='quantity'>{quantity}x</span>
                  <span className='price'>${price}</span>
                  <span className='total-price'>
                    ${(quantity * price).toFixed(2)}
                  </span>
                </p>
              </div>
              <div className='removeBtn'>
                <img
                  src={removeIcon}
                  alt='removeIcon'
                  onClick={() => handleRemoveFromCart(id)}
                />
              </div>
            </div>
          );
        })}
        <TotalPrice totalPrice={totalPrice} />
        <p className='delivery'>
          <img src={carbonNeutral} alt='carbonNeutral' />
          This is a carbon-neutral delivery
        </p>
        <button className='confirm-order' onClick={handleOpenModal}>
          Confirm Order
        </button>
      </div>
    </>
  );
};

export default CartItems;
