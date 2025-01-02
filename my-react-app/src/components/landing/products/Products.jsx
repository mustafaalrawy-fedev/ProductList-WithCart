import AddToBtn from '../AddToBtn/AddToBtn';
import './Product.scss';

const DesktopProducts = ({ items, cartItem, handleAddToBtn }) => {
  return (
    <>
      <div className='products'>
        <h1>Desserts</h1>
        <div className='product-items'>
          {items.map((product) => {
            const { id, name, price, category, image } = product;

            const cartDetails = cartItem.find((item) => item.id === id);
            const productQuantity = cartDetails ? cartDetails.quantity : 0;

            return (
              <div key={id} className='product-info'>
                <div className='image'>
                  <img
                    src={image.desktop}
                    alt={name}
                    className={`${cartDetails?.id === id ? 'active' : ''}`}
                  />
                  <AddToBtn
                    amount={productQuantity}
                    handleAddToBtn={() => handleAddToBtn(id)}
                    id={id}
                  />
                </div>
                <div className='info'>
                  <p>{category}</p>
                  <h4>{name}</h4>
                  <p className='price'>${price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DesktopProducts;
