import { useContext } from "react"
import { Context } from "../../Context"

const Searcher = () => {
    const {setFilterSearch} = useContext(Context)
    return (
        <div>
            <input
                className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
                type="text"
                placeholder="Search a product"
                onChange={(event) => setFilterSearch(event.target.value)}
            />
        </div>
    )
}

export { Searcher }