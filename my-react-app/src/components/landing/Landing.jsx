import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  deleteItems,
  getProduct,
  removeItem,
} from '../../store/cartSlice/cartSlice';
import Products from './products/Products';
import Cart from '../cart/Cart';
// scss
import './landing.scss';
import Modal from '../modal/Modal';
import { closeModal, openModal } from '../../store/modalSlice/modalSlice';

const Landing = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, items, isEmpty, cartItem, totalPrice } =
    useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const handleAddToBtn = useCallback(
    (itemId) => {
      const product = items.find((el) => el.id === itemId);
      // console.log(product);
      dispatch(addItem(product));
    },
    [items, dispatch]
  );

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItem(itemId));
  };

  // ModalSlice
  const { isOpen, modalData } = useSelector((state) => state.modal);

  const handleOpenModal = () => {
    dispatch(openModal(cartItem));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    dispatch(deleteItems());
  };

  return (
    <>
      <section className='desserts-items'>
        <Products
          items={items}
          isEmpty={isEmpty}
          cartItem={cartItem}
          handleAddToBtn={handleAddToBtn}
        />
        <Cart
          isEmpty={isEmpty}
          cartItem={cartItem}
          handleRemoveFromCart={handleRemoveFromCart}
          handleOpenModal={handleOpenModal}
          totalPrice={totalPrice}
        />
        {/* Modal */}
        <Modal
          isOpen={isOpen}
          modalData={modalData}
          handleCloseModal={handleCloseModal}
          totalPrice={totalPrice}
        />
      </section>
    </>
  );
};

export default Landing;
