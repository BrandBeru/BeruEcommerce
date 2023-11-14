import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../utils/useLocalStorage";

const Context = createContext()

const Provider = ({ children }) => {
    //shopping cart - Imcrement quantity
    const [count, setCount] = useState(0)
    //Shopping cart - Add products to card
    const { item: cardProducts, saveItem: setCardProducts } = useLocalStorage("selected_product", [])

    // User logged in information profile
    const { item: user, saveItem: setUser } = useLocalStorage("user", {})
    const { item: token, saveItem: setToken } = useLocalStorage("token", {})
    const isLoggedIn = () => {
        return user.email ? true : false
    }

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
    const { item: order, saveItem: setOrder } = useLocalStorage("order_products", [])

    // Get Products
    const [products, setProducts] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState(null)

    //Get Products by title
    const [filterSearch, setFilterSearch] = useState('')
    useEffect(() => {
        if (!isLoggedIn()) return;
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(data => data.json())
            .then(data => setProducts(data))
    }, [user])

    //User SignIn 
    const signIn = (user) => {
        try {
            fetch('https://api.escuelajs.co/api/v1/users/', {
                method: "POST",
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(user)
            })
                .then(data => data.json())
                .then(data => setUser(data))
            return true
        } catch {
            return false
        }
    }
    //User LogIn 
    const logIn = async (user) => {
        return await fetch('https://api.escuelajs.co/api/v1/auth/login/', {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(user)
        }).then(data => data.json())
    }
    const getUserData = async (localToken) => {
        return await fetch('https://api.escuelajs.co/api/v1/auth/profile',{
            method: 'GET',
            headers: {'Authorization':'Bearer ' +localToken.access_token}
        }).then(data =>  data.json())
    }

    useEffect(() => {
        setCount(cardProducts.length)
    }, [cardProducts])

    const filteredProductsByTitle = (products, filterSearch) => {
        return products?.filter(product => product.title.toLowerCase().includes(filterSearch.toLowerCase()))
    }
    useEffect(() => {
        if (filterSearch) setFilteredProducts(filteredProductsByTitle(products, filterSearch))
    }, [products, filterSearch])

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
                setIsCheckoutOpen,
                openCheckout,
                closeCheckout,
                order,
                setOrder,
                products,
                setProducts,
                filterSearch,
                setFilterSearch,
                filteredProducts,
                setFilteredProducts,
                user,
                setUser,
                token,
                setToken,
                isLoggedIn,
                getUserData,
                signIn,
                logIn
            }
        }>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }