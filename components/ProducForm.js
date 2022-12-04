import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function ProducForm() {

const [product, setProduct] = useState({
    name: "",
    cientos: 0,
    costo: 0,
  })

  const router = useRouter()

  // console.log(router.query);

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (router.query.id) {
      console.log('PUT');
      await axios.put('/api/products/' + router.query.id , product)
    } else {
      console.log('POST');
      await axios.post('/api/products', product)
    }
    router.push('/') 
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
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name produc:</label>
            <input type="text" name='name' onChange={handleChange} value={product.name}/>

            <label htmlFor='cientos'>Cantidad:</label>
            <input type="text" name='cientos' id="cantidad" onChange={handleChange} value={product.cientos}/>

            <label htmlFor='costo'>costo:</label>
            <input type="text" name='costo' onChange={handleChange} value={product.costo}/>

            <button>{
              router.query.id ? 'update product' : 'Agregar product'
            }</button> 
        </form>
    </div>
  )
}
