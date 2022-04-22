import { useState } from 'react';
import styles from './Counter.module.scss'

const Counter = () => {

const [counter, setCounter] = useState(0);

    return (
        <div className={styles.counter}>
            <div className={styles.border}>
                <p className={styles.text}>You reached <br /><span>{counter}</span> <br />mountains out of <br /><span>28</span></p>
            </div>
        </div>
    );
};

export default Counter;