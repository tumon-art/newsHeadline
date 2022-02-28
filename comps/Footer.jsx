import styles from '../styles/Footer.module.css'

const Footer = () => {

  const goTop = () => window.scrollTo({top: 0, behavior: 'smooth'})
  
  return (
   <div className={styles.footerHold}>

    <svg className={styles.scrollTop} onClick={goTop}
    viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" 
    d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 
    1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 
    8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 
    0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 
    0 111.414-1.414L10 14.586l4.293-4.293a1 1 
    0 011.414 0z" clipRule="evenodd" />
    </svg>

     <p className={styles.p}> Done with NextJS and NewsApi</p>
    
    <span className={styles.copyrights}>
        Copyright © 2022
    </span>

   </div>
  )
}

export default Footer
