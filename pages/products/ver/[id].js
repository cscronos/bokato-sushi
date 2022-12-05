import axios from "axios"
import {useRouter} from "next/router";
import PageLayout from "../../../components/PageLayout.jsx";
import Image from "next/image.js";
import style from "../../../styles/Detalles.module.css";

function ProductPage({product}) {
    return (
        <PageLayout>
            <div className={style.contenedor}>
                <div className={style.imagen}>
                    <Image src={product.src} alt="foto mati" width={200} height={200}/>
                </div>
                <div className={style.info}>
                    <h2>{product.name}</h2>
                    <p>Id: {product.id}</p>
                    <p>Cantidad: {product.cientos}</p>
                    <p>Costo: {product.costo}</p>
                </div>
            </div>
            
        </PageLayout>
    )
}

export const getServerSideProps = async (context) => {

    const {data: product} = await axios.get('http://localhost:3000/api/products/' + context.query.id)
    // console.log(res.data);

    return{
        props: {
            product, 
        }
    }
}

export default ProductPage