import { useContext } from "react"
import { Context } from "../../Context"

const Searcher = () => {
    const {setFilterSearch} = useContext(Context)
    return (
        <div>
            <input
                className="rounded-lg border border-green-600 bg-gray-900 w-96 p-2 focus:outline-none"
                type="search"
                placeholder="Search a product"
                onChange={(event) => setFilterSearch(event.target.value)}
            />
        </div>
    )
}

export { Searcher }