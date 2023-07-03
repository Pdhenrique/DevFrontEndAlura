import styles from './NotFound.module.css'

function NotFound (){
    return(
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>Movie not found</p>
        </section>
    )
}

export default NotFound