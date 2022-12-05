import axios from "axios"
import {useRouter} from "next/router";
import PageLayout from "../../../components/PageLayout.jsx";

function ProductPage({product}) {
    return (
        <PageLayout>
            <div>
                <h2>{product.name}</h2>
                <p>id: {product.id} / cientos: {product.cientos} / costo: {product.costo}</p>
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