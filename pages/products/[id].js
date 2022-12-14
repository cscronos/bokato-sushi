import axios from "axios"
import {useRouter} from "next/router";
import PageLayout from "../../components/PageLayout.jsx";

function ProductPage({product}) {

    const router = useRouter()
    const handleDelete = async (id) => {
        const res = await axios.delete('/api/products/' + id)
        router.push('/new')
        console.log(res);
    }

    return (
        <PageLayout title="Bokato - ">
            <div>
                <h2>{product.name}</h2>
                <p>id: {product.id} / cientos: {product.cientos} / costo: {product.costo}</p>
                
                <button onClick={() => handleDelete(product.id)}>Delete</button>
                <button onClick={() => router.push("/products/edit/" + product.id)}>Update</button>
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