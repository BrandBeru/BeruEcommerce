import { createContext, useEffect, useState } from "react";

const Context = createContext()

const Provider = ({children}) => {
    //shopping cart - Imcrement quantity
    const [count, setCount] = useState(0)
    //Shopping cart - Add products to card
    const [cardProducts, setCardProducts] = useState([])

    //Product Detail - Change state
    const [isDetailOpen, setIsDetailOpen] = useState(false)
    const openProductDetail = () => setIsDetailOpen(true)
    const closeProductDetail = () => setIsDetailOpen(false)
    
    //Product detail - Show product
    const [productSelected, setProductSelected] = useState({})
    
    //
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
    const openCheckout = () => setIsCheckoutOpen(true)
    const closeCheckout = () => setIsCheckoutOpen(false)
    
    //Shopping Cart - Order
    const [order, setOrder] = useState([])

    // Get Products
    const [products, setProducts] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState(null)

    //Get Products by title
    const [filterSearch, setFilterSearch] = useState('')
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(data => data.json())
        .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        setCount(cardProducts.length)
    }, [cardProducts])

    const filteredProductsByTitle = (products, filterSearch) => {
        return  products?.filter(product => product.title.toLowerCase().includes(filterSearch.toLowerCase()))
    }
    useEffect(() => {
        if(filterSearch) setFilteredProducts(filteredProductsByTitle(products,filterSearch))
    },[products, filterSearch])

    return (
        <Context.Provider value={
            {
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                setIsDetailOpen,
                isDetailOpen,
                productSelected,
                setProductSelected,
                setCardProducts,
                cardProducts,
                isCheckoutOpen,
                openCheckout,
                closeCheckout,
                order,
                setOrder,
                products,
                setProducts,
                filterSearch,
                setFilterSearch,
                filteredProducts,
                setFilteredProducts
            }
        }>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }