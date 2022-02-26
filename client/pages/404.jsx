import styles from '../styles/404.module.css'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  // Redirect to HOME 
  useEffect(()=>{
    setTimeout(()=>{
      router.push('/')
    },3000)
  },[router])

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