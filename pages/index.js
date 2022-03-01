import Home from "../comps/Home"

export async function getStaticProps() {

    // fecht posts
  const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=${process.env.NEWS_API}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {data},
    revalidate: 10, // refresh
  }

}

const index = ({data}) => {
  return (
   <>
    <Home posts={data} />
   </>
  )
}

export default index
