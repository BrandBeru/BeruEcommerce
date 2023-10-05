import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { OrdersCard } from "../../Components/OrdersCard"
import { Context } from "../../Context"
import { Link } from "react-router-dom"

function MyOrders() {
    const { order } = useContext(Context)
    return (
        <Layout>
            <div className="flex items-center justify-center w-80 relative">
                
                <h1 className="font-medium text-xl">My orders</h1>
            </div>
            {
                order.map((o,index) => (
                    <Link
                        key={index}
                        to={`/my-orders/${index}`}>
                        <OrdersCard
                            totalPrice={o.totalPrice}
                            totalProducts={o.totalProducts}
                            date={o.date}
                        />
                    </Link>
                ))
            }
        </Layout>
    )
}

export { MyOrders }