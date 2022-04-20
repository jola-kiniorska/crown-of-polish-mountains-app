import styles from './Card.module.scss'

const Card = props => {
    return (
        <li className={styles.cards}>
            <div className={styles.name}>
                <h3 className={styles.mountain}>{props.name}</h3>
                <h4 className={styles.height}>{props.height}</h4>
            </div>
        </li>
    );
};

export default Card;