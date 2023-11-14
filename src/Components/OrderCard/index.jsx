import { AiOutlineClose } from "react-icons/ai"

const OrderCard = ({ id, title, category, imageUrl, price, handleDelete }) => {
    const closeProductDetail = () => {
        handleDelete(id)
    }
    return (
        <>
            <div className="flex justify-between items-cente">
                <div className="flex items-center gap-2">
                    <figure className="w-20 h-20">
                        <img className="w-full h-full rounded-lg object-cover" src={imageUrl}></img>
                    </figure>
                    <div className="flex flex-col">
                        <p className="text-sm font-normal">{title}</p>
                        <p className="text-sm font-light">{category}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-lg font-medium">${price}</p>
                    {handleDelete && <AiOutlineClose className='cursor-pointer' onClick={closeProductDetail} />}
                </div>
            </div>
            <span className="w-full border-b border-green-900"></span>
        </>
    )
}

export { OrderCard }