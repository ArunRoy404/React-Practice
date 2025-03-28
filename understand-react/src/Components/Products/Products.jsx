import { useEffect, useState } from "react"
import Product from "./Product"

const Products = () => {
    const url = 'https://fakestoreapi.com/products'

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(url).then(response => response.json()).then(data => setProducts(data))
    }, [])

    return (
        <div className="border-2 border-black mt-6 bg-gray-200 p-5">
            <h2 className="text-3xl">Total Products: {products.length}</h2>
            <ul className="list-decimal p-10">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </ul>
        </div>
    )
}
export default Products