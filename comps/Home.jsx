import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from './Header'


export default function Home({posts}) {

    // if no post
  if(posts === undefined) {
    return(
      <div className={styles.demo}>
      <Header>
      <Link href='/aljazeera'> Aljazeera </Link> 
      </Header>
      </div>
    )
  }

  // if post exists
  return (
    <>
     <Header>
     <Link href='/aljazeera'> Aljazeera </Link> 
     </Header>
     
     <div className={styles.headline}>
        {posts.articles !== undefined && (
          posts.articles.map((e,i)=>{
            return(
                <div key={i}>
                <div className={styles.titles}>
                {/* <img className={styles.img} src={e.urlToImage} alt='image' loading="lazy" /> */}
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
