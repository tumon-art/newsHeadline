import styles from '../styles/About.module.css'
import Link from 'next/link'
import Footer from '../comps/Footer'

const about = () => {
  return (
   <>
    <div className={styles.headerHold}>
     <div className={styles.h1}> About Page </div>
     <div className={styles.home}>
      <Link href='/'> Home </Link> 
     </div>
     </div>
     <p className={styles.p}>     
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magni dolor tempore, fugit delectus, laboriosam dolore sed assumenda nam animi error modi quidem, tenetur libero? Veritatis temporibus eius fugit quam.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magni dolor tempore, fugit delectus, laboriosam dolore sed assumenda nam animi error modi quidem, tenetur libero? Veritatis temporibus eius fugit quam.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magni dolor tempore, fugit delectus, laboriosam dolore sed assumenda nam animi error modi quidem, tenetur libero? Veritatis temporibus eius fugit quam.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magni dolor tempore, fugit delectus, laboriosam dolore sed assumenda nam animi error modi quidem, tenetur libero? Veritatis temporibus eius fugit quam.
     </p>
     <Footer />
   </>
  )
}

export default about