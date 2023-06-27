import styles from './Title.module.css';

const Title = ({ children }) => {
        return(
            <div className={styles.titulo}>
                {children}
            </div>
        )

    }

export default Title;
