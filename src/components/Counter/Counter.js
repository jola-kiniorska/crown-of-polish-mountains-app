import styles from './Counter.module.scss'
import { useSelector } from 'react-redux';
import { getClickedMountains } from '../../redux/store';

const Counter = () => {

const counter = useSelector(getClickedMountains)
const count = counter.length;


    return (
        <div className={styles.counter}>
            <div className={styles.border}>
                <p className={styles.text}>You reached <br /><span>{count}</span> <br />mountains out of <br /><span>28</span></p>
            </div>
        </div>
    );
};

export default Counter;