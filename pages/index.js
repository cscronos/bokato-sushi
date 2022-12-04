import PageLayout from "../components/PageLayout.jsx";
import PageBrijida from "../components/Home.jsx";
import axios from "axios";
import Link from "next/link.js";

export default function Home({products}) {
    return (
        <PageLayout title="NewsApp - Home">
            {/* MAIN */}
            <div>
                <PageBrijida/>
                {products.map(product => (
                    <Link href={`/products/${product.id}`} key={product.id}>
                        <div>
                        <h1>{product.name}</h1>
                        <p>id: {product.id} / cientos: {product.cientos} / costo: {product.costo}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </PageLayout>
    );
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
