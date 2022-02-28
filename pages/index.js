import Home from "../comps/Home"

export async function getStaticProps() {

    // fecht posts
  const res = await fetch(`https://newsapi.org/v2/everything?domains=trtworld.com&apiKey=${process.env.NEWS_API}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {data},
    revalidate: 20, // refresh
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
