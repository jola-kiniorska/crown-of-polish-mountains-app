import styles from './Splash.module.scss';

const Splash = () => {
    return(
        <div className={styles.imageContainer}>
            <img 
            className={styles.image}
            src={`${process.env.PUBLIC_URL}/images/mountains.jpg`} 
            alt="splash" />
            <h2 className={styles.header}>Crown of Polish Mountains</h2>
        </div>
    );
};

export default Splash;