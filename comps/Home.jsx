import styles from '../styles/Home.module.css'
import Link from 'next/link'
import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then((res) => res.json())


export default function Home() {

    const { data, error } = useSWR('https://newsapi.org/v2/top-headlines?country=us&apiKey=edad89887fb146608543a1054589c3dc', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
  return (
    <>
     <div className={styles.headerHold}>
     <div className={styles.h1}> Head-Line </div>
     <div className={styles.about}>
      <Link href='/about'> About </Link> 
     </div>
     </div>
     <div className={styles.headline}>
        {data.articles.map((e)=>{
            return(
                <div className={styles.titles} 
                key={e.id}> {e.title} </div>
            )
        })}
     </div>
    </>
  )
}
