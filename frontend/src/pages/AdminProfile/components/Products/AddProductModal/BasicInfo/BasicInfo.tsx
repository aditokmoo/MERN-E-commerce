import { UseFormRegister } from 'react-hook-form';
// SCSS
import styles from './BasicInfo.module.scss';

type propTypes = {
    register: UseFormRegister<Record<string, number>>
}

export default function BasicInfo({ register }: propTypes) {
    return (
        <div className={styles.formContainer}>
            <div className={styles.inputContainer}>
                <label htmlFor="name">Product name *</label>
                <input type="text" id='name' {...register('name')} />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="category">Product category *</label>
                <select id="category" {...register('category')}>
                    <option value="">Please select category</option>
                    <option value="smartphone">Smartphone</option>
                    <option value="computer">Computer</option>
                </select>
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.inputContainer}>
                    <label htmlFor="type">Type *</label>
                    <select id="type" {...register('type')}>
                        <option value="">Please select type</option>
                        <option value="new">New</option>
                        <option value="bestseller">Best seller</option>
                    </select>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="colors">Colors *</label>
                    <select id="colors" {...register('colors')}>
                        <option value="">Please select colors</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                    </select>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="price">Price *</label>
                    <input type="number" id='price' {...register('price')} />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="discount">Discount *</label>
                    <input type="number" id='discount' {...register('discount')} />
                </div>
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="desc">Description *</label>
                <textarea id="desc" {...register('desc')}></textarea>
            </div>
        </div>
    )
}