import Head from 'next/head'

export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  const data = await response.json()

  return {
    props: {
      reviews: data.slice(0, 20),
    },
  }
}

const Reviews = ({ reviews }) => {
  return (
    <>
      <Head>
        <title>Жирные бургеры | Reviews</title>
        <meta name="title" content="Жирные бургеры" />
      </Head>
      <div>
        <h1>Reviews</h1>
        <div className="reviews">
          {!!reviews.length &&
            reviews.slice(0, 20).map((res) => {
              return (
                <div key={res.id} className="review">
                  {res.id}
                  {' - '}
                  {`${res.body.slice(0, 80)} ...`}
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default Reviews
