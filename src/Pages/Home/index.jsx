import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { useContext, useEffect } from "react"
import { ProductDetail } from "../../Components/ProductDetail"
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu"
import { Context } from "../../Context"
import { useNavigate } from "react-router-dom"

function Home() {
    const { products, filteredProducts, filterSearch,isLoggedIn } = useContext(Context)
    const navigate = useNavigate()
    useEffect(() => {
        if(!isLoggedIn()){
            navigate('/login', {replace:true})
        }
    }, [])

    const path = window.location.pathname
    const category = path.split('/')[2]

    const renderView = () => {
        if (filterSearch?.length > 0) {
            if (filteredProducts?.length == 0) {
                return (<div className="w-full text-xl font-semibold text-center"><h1>Nothing match</h1></div>)
            }
            return category ?
                (filteredProducts?.filter(fp => fp.category.name?.toLowerCase().includes(category)).map(product => (
                    <Card key={product.id} data={product} />
                )))
                :
                (filteredProducts?.map((product) => (
                    <Card key={product.id} data={product} />
                )))
        }
        else {
            if (category) {
                return (products?.filter(product => product.category.name?.toLowerCase().includes(category)).map((product) => (
                    <Card key={product.id} data={product} />
                )))
            } else {
                return (products?.map((product) => (
                    <Card key={product.id} data={product} />
                )))
            }
        }

    }

    return (
        <Layout>
            <h1 className="text-xl font-semibold mb-5">{category ? category.toUpperCase() : "HOME"}</h1>
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {renderView()}
            </div>
            <ProductDetail />
            <CheckoutSideMenu />
        </Layout>
    )
}

export { Home }