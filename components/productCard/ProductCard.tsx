import {ProductCardProps} from "./ProductCardProps";
import styles from '../../styles/ProductCard.module.css'
export const ProductCard = (props: ProductCardProps) => {
    return (
    <div className={styles.card}>
        <div>
            <div className={styles.title}>{props.product.name}</div>
            <div className={styles.info}>
                <span className={styles.brand}>{props.product.brand}</span>
                <span>{props.product.category}</span>
            </div>
            <div className={styles.description}>
                {props.product.description}
            </div>
        </div>
        <div className={styles.price}>
            {props.product.price}
        </div>
    </div>
    )
}