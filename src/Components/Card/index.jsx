import { useContext, useState } from "react"
import { Context } from "../../Context"
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai"

const Card = ({ data }) => {
    const { openProductDetail, closeProductDetail, setProductSelected, setCardProducts, cardProducts, openCheckout } = useContext(Context)

    const showProduct = (product) => {
        openProductDetail()
        setProductSelected(product)
    }
    const addProducts = (event, productData) => {
        event.stopPropagation()
        setCardProducts([...cardProducts, productData])
        openCheckout()
        closeProductDetail()
    }
    const renderIcon = (id) => {
        const block = cardProducts.filter(product => product.id === id).length > 0

        if (!block) {
            return (<div
                className="absolute top-0 right-0 flex justify-center items-center bg-gray-600 w-6 h-6 rounded-full m-2 p-1"
                onClick={(event) => addProducts(event, data)}
            > {<AiOutlinePlus />}</div>)
        } else {
            return (<div
                className="absolute top-0 right-0 flex justify-center items-center bg-gray-900 w-6 h-6 rounded-full m-2 p-1 text-green-600"
            > {<AiOutlineCheck />}</div>)
        }
    }
    return (
        <div className="bg-gray-900 cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <div onClick={() => showProduct(data)} className="absolute w-full h-full duration-300 hover:bg-black/60 rounded-lg"></div>
                <span className="absolute bottom-0 left-0 bg-gray-900/60 rounded-lg text-green-300 text-xs m-2 px-3 py-0.5">{data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.images[0]}></img>
                {renderIcon(data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.title}</span>
                <span className="text-lg font-bold">$ {data.price}</span>
            </p>
        </div>
    )
}

export { Card }