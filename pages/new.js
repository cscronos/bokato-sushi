import {ProducForm} from '../components/ProducForm'
import PageLayout from "../components/PageLayout.jsx";
import styLista from "../styles/Lista.module.css";
import axios from "axios";
import Link from "next/link.js";
import Image from 'next/image';

import {useRouter} from "next/router";

function newPage({products}) {

  const router = useRouter()
  const saltoProduc = async (id) => {
    router.push('/products/'+ id)
  }

  return (
    <PageLayout title="Bokato - Contacto">
      <ProducForm/>
      <div className={styLista.contenedor}>
        {products.map(post => (
          <div className={styLista.tarjetas} key={post.id}>
            <p>{post.name}</p>
            <Image src={post.src} alt="foto mati" width={200} height={200}/>
            <p>id: {post.id} / cientos: {post.cientos} / costo: {post.costo}</p>
            <button className={styLista.editar} onClick={() => saltoProduc(post.id)} >Editar</button>
          </div>
        ))}
      </div>
    </PageLayout>
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

export default newPage