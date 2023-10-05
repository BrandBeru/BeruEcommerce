import { AiOutlineClose } from "react-icons/ai"

const OrderCard = ({id,title, imageUrl, price,handleDelete}) => {
    const closeProductDetail = () => {
        handleDelete(id)
    }
    return(
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl}></img>
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">$ {price}</p>
                { handleDelete && <AiOutlineClose className='cursor-pointer' onClick={closeProductDetail} />}
            </div>
        </div>
    )
}

export {OrderCard}