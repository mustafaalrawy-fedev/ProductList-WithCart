import cartIcon from '/assets/icons/icon-add-to-cart.svg';
import './AddToBtn.scss';
// import { useState } from 'react';
import decrementIcon from '/assets/icons/icon-decrement-quantity.svg';
import incrementIcon from '/assets/icons/icon-increment-quantity.svg';
import { useDispatch } from 'react-redux';
import {
  decrementItem,
  incrementItem,
} from '../../../store/cartSlice/cartSlice';

const AddToBtn = ({ handleAddToBtn, amount, id }) => {
  const dispatch = useDispatch();

  return (
    <div className='btn'>
      {amount !== 0 ? (
        <button className={`btn-count`}>
          <img
            className='incrementBtn'
            src={incrementIcon}
            alt={incrementIcon}
            onClick={() => dispatch(incrementItem(id))}
          />
          <span>{amount}</span>
          <img
            className='decrementBtn'
            src={decrementIcon}
            alt={decrementIcon}
            onClick={() => dispatch(decrementItem(id))}
          />
        </button>
      ) : (
        <button type='button' className='add-to-cart' onClick={handleAddToBtn}>
          <img src={cartIcon} alt={cartIcon} />
          <span>Add to Cart</span>
        </button>
      )}
    </div>
  );
};

export default AddToBtn;
