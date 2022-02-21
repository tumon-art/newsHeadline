import styles from '../styles/404.module.css'
import Link from 'next/link'

const NotFound = () => {
  return (
   <div className={styles.notFoundHold}>
    <h2 className={styles.h2}> 404 Erorr...</h2>

    <h4 className={styles.h4}> You are Lost! 

    <Link className={styles.link} href='/'>
        <a className={styles.link}>
            Home
        </a>
    </Link>

    </h4>
   </div>
  )
}

export default NotFound