import data from "./data";
import {Product} from "../interfaces/Product";
import {ProductCard} from "../components/productCard/ProductCard";
import styles from '../styles/Product.module.css'

export default function Products() {

    const products: Product[] = data

    return (
        <>
        <h1 className={styles.title}>Moje produkty</h1>
        <div className={styles.container}>
            {products.map(p => <ProductCard product={p} key={p.name}></ProductCard>)}
        </div>
        </>
    )
}