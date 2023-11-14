import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { Context } from "../../Context"
import { OrderCard } from "../../Components/OrderCard"
import { IoMdArrowBack } from "react-icons/io"
import { Link } from "react-router-dom"

function MyOrder(){
    const {order} = useContext(Context)
    const currentPath = window.location.pathname
    let idPath = currentPath.split('/')[2]
    if(idPath === 'last') idPath = order?.length-1
    return (
        <Layout>
            <div className="flex items-center justify-center w-80 relative mb-4">
                <Link to={'/my-orders'} className="absolute left-0">
                    <IoMdArrowBack className="h-6 w-6 hover:text-green-100 duration-300 cursor-pointer" />
                </Link>
                <h1 className="font-medium text-2xl">My order</h1>
            </div>
            <div className="flex flex-col gap-6 w-80">
                {
                    order?.[idPath]?.products.map(product => (
                        <OrderCard

                            id={product.id}
                            key={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </Layout>
    )
}

export {MyOrder}