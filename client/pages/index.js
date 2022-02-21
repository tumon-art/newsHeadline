import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Footer from '../comps/Footer'
export default function Home() {
  return (
    <>
     <div className={styles.headerHold}>
     <div className={styles.h1}> Home Page </div>
     <div className={styles.about}>
      <Link href='/about'> About </Link> 
     </div>
     </div>
     <p className={styles.p}>     
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magni dolor tempore, fugit delectus, laboriosam dolore sed assumenda nam animi error modi quidem, tenetur libero? Veritatis temporibus eius fugit quam.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magni dolor tempore, fugit delectus, laboriosam dolore sed assumenda nam animi error modi quidem, tenetur libero? Veritatis temporibus eius fugit quam.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magni dolor tempore, fugit delectus, laboriosam dolore sed assumenda nam animi error modi quidem, tenetur libero? Veritatis temporibus eius fugit quam.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magni dolor tempore, fugit delectus, laboriosam dolore sed assumenda nam animi error modi quidem, tenetur libero? Veritatis temporibus eius fugit quam.
     </p>
    </>
  )
}
