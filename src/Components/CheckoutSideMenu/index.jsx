import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../Context"
import { AiOutlineClose } from "react-icons/ai"
import { OrderCard } from "../OrderCard"

import { totalPrice } from '../../utils'

import './style.css'

const CheckoutSideMenu = () => {
    const { isCheckoutOpen, closeCheckout, cardProducts, setCardProducts, setOrder, order } = useContext(Context)
    const handleDelete = (id) => {
        const filteredProducts = cardProducts.filter(product => product.id != id)
        setCardProducts(filteredProducts)
    }
    const handleCheckout = () => {
        const date = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
        const orderToAdd = {
            date: date,
            products: cardProducts,
            totalProducts: cardProducts.length,
            totalPrice: totalPrice(cardProducts)
        }
        setOrder([...order, orderToAdd])
        setCardProducts([])
        setFilterSearch('')
    }
    return (
        isCheckoutOpen && <aside className="checkout-side-menu flex flex-col fixed right-0 border rounded-lg border-black bg-gray-900">
            <div className="flex justify-between items-center p-4">
                <h2 className="font-medium text-xl">My Order</h2>
                <div>
                    <AiOutlineClose className='cursor-pointer' onClick={() => closeCheckout()} />
                </div>
            </div>
            <div className="px-6 flex flex-col gap-4 overflow-y-auto flex-1">
                {
                    cardProducts.map(product => (
                        <>
                            <OrderCard

                                id={product.id}
                                key={product.id}
                                title={product.title}
                                imageUrl={product.images}
                                price={product.price}
                                handleDelete={handleDelete}
                                category={product.category.name}
                            />
                        </>
                    ))
                }
            </div>
            <div className="px-6 mb-4">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-light text-xl">Total:</span>
                    <span className="font-semibold text-2xl">${totalPrice(cardProducts)}</span>
                </p>
                <Link to="/my-orders/last">
                    <button className="w-full bg-transparent border-2 border-black py-3 text-white rounded-lg duration-300 hover:bg-gray-700 hover:border-transparent" onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export { CheckoutSideMenu }