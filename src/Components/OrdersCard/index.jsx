import { AiOutlineClose, AiOutlineRight } from "react-icons/ai"

const OrdersCard = ({ totalPrice, totalProducts, date }) => {
    return (
        <div className="flex justify-between items-center border border-black w-80 p-4 rounded-lg mt-4">
            <div className="flex justify-between w-full items-center">
                <p className="flex flex-col">
                    <span className="font-light">{date}</span>
                    <span className="font-light">{totalProducts} articles</span>
                </p>
                <p className="flex gap-3 justify-center items-center">
                    <span className="text-lg font-semibold">${totalPrice}</span>
                    <AiOutlineRight className="h-6 w-6 text-black" />
                </p>
            </div>
        </div>
    )
}

export { OrdersCard }