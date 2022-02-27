import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home({posts}) {

    // if no post
  if(posts === undefined) {
    return(
      <div className={styles.demo}>
      <div className={styles.headerHold}>
      <div className={styles.h1}> Head-Line </div>
      <div className={styles.about}>
      <Link href='/about'> About </Link> 
      </div>
      </div> 
      </div>
    )
  }

  // if post exists
  return (
    <>
     <div className={styles.headerHold}>
     <div className={styles.h1}> Head-Line </div>
     <div className={styles.about}>
      <Link href='/aljazeera'> Aljazeera </Link> 
     </div>
     </div>
     <div className={styles.headline}>
        {posts.articles !== undefined && (
          posts.articles.map((e,i)=>{
            return(
                <div key={i}>
                <div className={styles.titles}>
                <img className={styles.img} src={e.urlToImage} alt='image' loading="lazy" />
                  <Link href={e.url}>
                    {e.title}
                  </Link>
                </div>
                </div>
            )
        })
        )}
     </div>
    </>
  )
}
