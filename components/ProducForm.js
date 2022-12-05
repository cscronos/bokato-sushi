import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Form.module.css";

export function ProducForm() {

const [product, setProduct] = useState({
    name: "",
    src: "",
    cientos: 0,
    costo: 0,
  })

  const router = useRouter()

  // console.log(router.query);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const hola = document.getElementById('hola')
    if (router.query.id) {
      console.log('PUT');
      await axios.put('/api/products/' + router.query.id , product)
    } else {
      console.log('POST');
      await axios.post('/api/products', product)
    }
    router.push('/new')
    hola.reset();
  }

  const handleChange = ({target: {name, value}}) => {
    setProduct({...product, [name]: value})
  }

  useEffect(() => {
    const getProduct = async () => {
      const {data} = await axios.get('/api/products/' + router.query.id)
      setProduct(data)
      // setProduct({product: data.productos, cientos: data.cientos, costo: data.costo})
    }
    if (router.query.id){
      getProduct(router.query.id)
    }
  }, [])

  return (
    <div className={styles.contenedor}>
        <form className={styles.cont_form} onSubmit={handleSubmit} id="hola">
            <label htmlFor='name'>Name produc:</label>
            <input className={styles.input} type="text" name='name' onChange={handleChange} value={product.name}/>

            <label htmlFor='src'>Link Img:</label>
            <input className={styles.input} type="text" name='src' onChange={handleChange} value={product.src}/>

            <label htmlFor='cientos'>Cantidad:</label>
            <input className={styles.input}  type="text" name='cientos' id="cantidad" onChange={handleChange} value={product.cientos}/>

            <label htmlFor='costo'>costo:</label>
            <input className={styles.input} type="text" name='costo' onChange={handleChange} value={product.costo}/>

            <button className={styles.button}>{
              router.query.id ? 'update product' : 'Agregar product'
            }</button> 
        </form>
    </div>
  )
}
