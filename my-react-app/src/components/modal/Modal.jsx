import { useDispatch } from 'react-redux';
import './modal.scss';
// icons
import orderConfirmedIcon from '/assets/icons/icon-order-confirmed.svg';
import { closeModal } from '../../store/modalSlice/modalSlice';
import TotalPrice from '../totalPrice/TotalPrice';

const Modal = ({ isOpen, modalData, handleCloseModal, totalPrice }) => {
  const dispatch = useDispatch();

  return (
    <>
      {/* overlay */}
      <div
        className={`overlay ${isOpen ? 'show' : ''}`}
        onClick={() => dispatch(closeModal())}
      ></div>
      {/* modal */}
      <div className={`modal ${isOpen ? 'show' : ''}`}>
        <div className='modal-info'>
          <img src={orderConfirmedIcon} alt='orderConfirmedIcon' />
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </div>
        <div className='modal-content'>
          <>
            {modalData.map((item) => {
              const { image, name, id, price, quantity } = item;
              return (
                <div key={id} className='item'>
                  <img src={image.thumbnail} alt={name} />
                  <div className='item-info'>
                    <h5>{name}</h5>
                    <p>
                      <span>{quantity}x</span>${price}
                    </p>
                  </div>
                  <div className='total-price'>
                    ${(quantity * price).toFixed(2)}
                  </div>
                </div>
              );
            })}
          </>
          <TotalPrice totalPrice={totalPrice} />
        </div>
        <button className='new-order-btn' onClick={handleCloseModal}>
          Start New Order
        </button>
      </div>
    </>
  );
};

export default Modal;
