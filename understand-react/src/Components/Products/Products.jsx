import { useEffect, useState } from "react"
import Product from "./Product"

const Products = () => {
    const url = 'https://fakestoreapi.com/productss'

    const [products, setProducts] = useState([])

    // loading and error handler
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState('')

    useEffect(() => {
        setIsLoading(true);
        console.log(isLoading)
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            setProducts(data)
            setIsLoading(false)
        }).catch(error=>{
            setIsLoading(false)
            setIsError(error.message)
        })
    }, [])

    return (
        <div className="border-2 border-black mt-6 bg-gray-200 p-5">
            <h2 className="text-3xl">Total Products: {products.length}</h2>
            <ul className="list-decimal p-10">

                {/* conditional rendering */}
                {isLoading && <h2 className="text-2xl font-bold">Loading Products..........</h2>}
                {isError && <h2 className="text-2xl font-bold">Error: {isError}</h2>}
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </ul>
        </div>
    )
}
export default Products