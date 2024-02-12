import { useShoppingCartContext } from "../../../../context/ShoppingCartContext";
// React icons
import { FaTimes } from 'react-icons/fa';
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
// SCSS
import styles from './CartItem.module.scss';

type propTypes = {
    data: any,
}

export default function CartItem({ data }: propTypes) {
    const { handleRemoveCartItem, addQuantity, cartItemsQuantity } = useShoppingCartContext();

    return (
        <div className={styles.cartItem}>
            <img src={`http://localhost:8000/${data.images[0]}`} className={styles.image} alt="" />
            <h3 className={styles.name}>{data.name}</h3>
            <div className={styles.counter}>
                <button
                    className={styles.btnDown}
                >
                    <TiMinus />
                </button>
                <input 
                    type="text" 
                    name='quantity'
                    value={cartItemsQuantity[data._id]}
                    id='quantity' 
                    readOnly
                />
                <button 
                    className={styles.btnUp} 
                    onClick={() => addQuantity(data._id)}
                >
                    <FaPlus />
                </button>
            </div>
            <span className={styles.price}>$ {data.discountPrice ? data.discountPrice * cartItemsQuantity[data._id] : data.price * cartItemsQuantity[data._id]}</span>
            <span className={styles.removeBtn} onClick={() => handleRemoveCartItem(data)}><FaTimes /></span>
        </div>
    )
}