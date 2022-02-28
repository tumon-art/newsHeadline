import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Header.module.css'


const Header = ({children,pageName}) => {
    const [navbar,setnavbar] = useState(false)

    const svgOnClick = () => {
        setnavbar((p)=>!p)
        
        if(navbar === false) {
            setTimeout(()=>{
                document.getElementById('linkHold').style.display='block'
            },100)
        }
    }
  return (
   <>
    <div className={styles.headerHold}>

    {navbar ? (
        <div className={styles.nav}>
        <svg onClick={svgOnClick}
        className={styles.svg}  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <div id='linkHold' className={styles.linkHold}>
            <span className={styles.linkSpan}>
            <Link href='trt'> TRT </Link>
            </span>
            <span className={styles.linkSpan}>
                <Link href='tech'> Tech </Link>
            </span>
            <span className={styles.linkSpan}>
                <Link href='dev'> Dev </Link>
            </span>
            <span className={styles.linkSpan}>
                <Link href='bd'>BD</Link>
            </span>
        </div>
    </div>
    ):(
        <>
        <svg onClick={svgOnClick} 
        className={styles.svg} viewBox="0 0 20 20" fill="currentColor">
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 
        110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2
        2H4a2 2 0 01-2-2v-4z" />
        </svg>

        <div className={styles.h1}>
        Head-Line 
        <span className={styles.pageName}>
        {pageName}
        </span>
        </div>
        <div className={styles.link}>
        {children}
        </div>
        </>
    )}
    
    </div>
   </>
  )
}

export default Header