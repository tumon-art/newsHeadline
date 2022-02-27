import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
   <div className={styles.footerHold}>
     <p className={styles.p}> Done with NextJS and NewsApi</p>
    <span className={styles.copyrights}>
        Copyrights 2022
    </span>
   </div>
  )
}

export default Footer