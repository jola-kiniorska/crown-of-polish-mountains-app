import styles from './Counter.module.scss'

const Counter = () => {
    return (
        <div className={styles.counter}>
            <div className={styles.border}>
                <p className={styles.text}>You reached <br /><span>2</span> <br />mountains out of <br /><span>28</span></p>
            </div>
        </div>
    );
};

export default Counter;