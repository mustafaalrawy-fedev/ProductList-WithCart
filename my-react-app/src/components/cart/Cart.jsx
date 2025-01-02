import './cart.scss';
// icons
import emptyCart from '/assets/icons/illustration-empty-cart.svg';
import CartItems from './cartItems/CartItems';

const Cart = ({
  isEmpty,
  cartItem,
  handleRemoveFromCart,
  handleOpenModal,
  totalPrice,
}) => {
  const totalQuantity = cartItem
    .map((item) => item.quantity)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <>
      <div className='cart'>
        <h3>Your Cart ({totalQuantity})</h3>
        <div className='content'>
          {isEmpty || totalPrice === 0 ? (
            <div className='empty-cart'>
              <img src={emptyCart} alt='Empty Cart' />
              <h6>Your added items will appear here</h6>
            </div>
          ) : (
            <CartItems
              handleRemoveFromCart={handleRemoveFromCart}
              cartItem={cartItem}
              handleOpenModal={handleOpenModal}
              totalPrice={totalPrice}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
