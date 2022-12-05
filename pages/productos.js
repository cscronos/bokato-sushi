import PageLayout from "../components/PageLayout.jsx";
import axios from "axios";
import styLista from "../styles/Lista.module.css";
import { useRouter } from "next/router";
import Image from "next/image.js";

function productos({products}) {
  const router = useRouter()
  const saltoProduc = async (id) => {
    console.log("Producto: ", id);
    router.push('/products/ver/'+ id)
  }

  return (
    <div>
        <PageLayout title="Bokato - Productos">
            {/* MAIN */}
            <div id="alo">
            </div>
            <div className={styLista.contenedor}>
                {products.map(post => (
                <div className={styLista.tarjetas} key={post.id}>
                    <p>{post.name}</p>
                    <Image src={post.src} alt="foto mati" width={200} height={200}/>
                    <p>Precio: ${post.costo}</p>
                    <button className={styLista.agregar} onClick={() => saltoProduc(post.id)}>Detalles</button>
                </div>
                ))}
            </div>
        </PageLayout>
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

export default productos