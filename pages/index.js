import Home from "../comps/Home"

export async function getStaticProps() {

  const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=edad89887fb146608543a1054589c3dc')
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
  console.log(data)
  return (
   <>
    <Home posts={data} />
   </>
  )
}

export default index