import styles from "../../../styles/Home.module.css";
import {useState} from "react";

export const CounterComponent = () => {

    const [count, setCount] = useState(0)

    const minus = () => {
        setCount(count - 1)
    }

    const plus = () => {
        setCount(count + 1)
    }

    return (
        <div className={styles.counter}>
            <div className={styles.text}>{count}</div>
            <div>
                <button className={styles.btn} onClick={minus}>Odebrat</button>
                <button className={styles.btn} onClick={plus}>Přídat</button>
            </div>
        </div>
    )
}