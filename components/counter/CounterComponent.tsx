import styles from "../../styles/Counter.module.css";
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
                <button className="btn" onClick={minus}>Odebrat</button>
                <button className="btn" onClick={plus}>Přidat</button>
            </div>
        </div>
    )
}