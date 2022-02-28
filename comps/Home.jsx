import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from './Header'


export default function Home({posts}) {

    // if no post
  if(posts.articles.length <= 0) {
    return(
      <div className={styles.demo}>
        <Header>
         Aljazeera 
        </Header>
        <div className={styles.sorry}>
           API isn't Responding 
        </div>
      <div>
        
      </div>
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
