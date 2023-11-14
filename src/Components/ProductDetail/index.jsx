import { useContext } from 'react'
import './style.css'
import {AiOutlineClose} from 'react-icons/ai'
import { Context } from '../../Context'

const ProductDetail = () => {
    const {closeProductDetail,isDetailOpen, productSelected} = useContext(Context)
    return (
         isDetailOpen && <aside className="z-20 product-detail flex flex-col fixed right-0 border rounded-lg border-black bg-gray-700">
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <AiOutlineClose className='cursor-pointer' onClick={() => closeProductDetail()} />
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' src={productSelected.images[0]}></img>
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl'>$ {productSelected.price}</span>
                <span className='font-medium text-md'> {productSelected.title}</span>
                <span className='font-light text-sm'> {productSelected.description}</span>
            </p>
        </aside>
    )
}

export {ProductDetail}