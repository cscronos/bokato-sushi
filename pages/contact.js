import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link';

export default function Home({products}) {
  // console.log(products);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {products.map(product => (
        <Link href={`/products/${product.id}`} key={product.id}>
            <div>
              <h1>{product.name}</h1>
              <p>id: {product.id} / cientos: {product.cientos} / costo: {product.costo}</p>
            </div>
        </Link>
      ))}
    </div>
  )
}

export const getServerSideProps = async context => {
  const { data: products } = await axios.get('http://localhost:3000/api/products')
  // console.log(res.data);

  return {
    props: {
      products
    }
  }
}