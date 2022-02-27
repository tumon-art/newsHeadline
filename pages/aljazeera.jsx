import styles from '../styles/Aljazeera.module.css'
import Link from 'next/link'

export async function getStaticProps() {

    const res = await fetch(`https://newsapi.org/v2/everything?domains=aljazeera.com&apiKey=${process.env.NEWS_API}`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true
      }
    }
  
    return {
      props: {data},
      revalidate: 20,
    }
  
}

export default function Home({data}) {

  if(data === undefined) {
    return(
      <div className={styles.demo}>
      <div className={styles.headerHold}>
      <div className={styles.h1}> Head-Line _Aljazeera </div>
      <div className={styles.home}>
      <Link href='/'> Home </Link> 
      </div>
      </div> 
      </div>
    )
  }

  return (
    <>
     <div className={styles.headerHold}>
     <div className={styles.h1}> Head-Line _Aljazeera </div>
     <div className={styles.home}>
      <Link href='/'> Home </Link> 
     </div>
     </div>
     <div className={styles.headline}>
        {data.articles !== undefined && (
          data.articles.map((e,i)=>{
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
