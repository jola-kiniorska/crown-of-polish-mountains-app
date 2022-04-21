import styles from './Column.module.scss'
import { useSelector } from 'react-redux'
import Card from '../Card/Card';

const Column = props => {

    const cards = useSelector(state => state.mountains);

    return (
        <article>
            <ul className={styles.column}>
                {cards.map(card =>
                    <Card key={card.id} name={card.name} height={card.height} clicked={card.clicked}/>
                )}
            </ul>
        </article>
    );
};

export default Column;