import Home from "../comps/Home"

export async function getStaticProps() {

  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API}`)
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

const index = ({data}) => {
  return (
   <>
    <Home posts={data} />
   </>
  )
}

export default index