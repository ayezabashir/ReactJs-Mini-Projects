import './loadmore.css'
import { useEffect, useState } from 'react';

const LoadMore = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [disabledButton, setDisabledButton] = useState(false)

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const result = await response.json();
            console.log(result)
            if (result && result.products && result.products.length) {
                setProduct((prevData) => [...prevData, ...result.products]);
                setLoading(false)
            }
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count])

    useEffect(() => {
        if (product && product.length === 100) {
            setDisabledButton(true)
        }
    }, [product])

    if (loading) {
        return <div>Loading...</div>
    }


    return (
        <div className='product'>
            <div className='products-container'>
                {
                    product && product.length ?
                        product.map((item) =>
                            <div className='product-item' key={item.id}>
                                <img src={item.thumbnail} alt={item.title} />
                                <p>{item.title}</p>
                            </div>
                        )
                        :
                        null
                }
            </div>
            <div className='button-container'>
                <button disabled={disabledButton} onClick={() => setCount(count + 1)}>Load More Products</button>
            </div>
            {
                disabledButton ? <p>No More Products found</p> : null
            }
        </div>
    )
}

export default LoadMore
