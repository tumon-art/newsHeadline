import styles from '../styles/Link.module.css'
import Link from 'next/link'
import Header from '../comps/Header'

export async function getStaticProps() {

  const res = await fetch(`https://newsapi.org/v2/everything?domains=dev.to&apiKey=${process.env.NEWS_API}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {data},
    revalidate: 10,
  }
  
}

export default function Home({data}) {
    
  if(data.articles.length <= 0) {
    return(
      <div className={styles.demo}>
        <Header pageName='_Dev'>
         <Link href='/'> Home </Link>
        </Header>
        <div className={styles.sorry}>
           API isn`t Responding 
        </div>
      <div>
        
      </div>
      </div>
    )
  }

  return (
    <>
     <Header pageName={"_Dev"}>
      <Link href='/'> Home </Link> 
     </Header> 
      
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
