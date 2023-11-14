import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { Context } from "../../Context"
import { AiOutlineShopping, AiOutlineUnorderedList, AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai"
import { Searcher } from "../Searcher"
import { MdOutlineFavoriteBorder } from 'react-icons/md'

import icon from '../../images/icon-cart.svg'

const NavBar = () => {
    const activeStyle = 'underline underline-offset-4'
    const style = 'duration-300 hover:text-green-100'
    const iconsStyle = "absolute -top-3 -right-3 text-sm w-6 h-6 rounded-full font-mono flex items-center justify-center text-gray-50 font-normal bg-green-900/60"

    const { count, setIsCheckoutOpen, isCheckoutOpen, order, isLoggedIn } = useContext(Context)

    const renderCategories = () => {
        return isLoggedIn() && <>
            <li className={style}>
                <NavLink
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                    to='/'>
                    All
                </NavLink>
            </li>
            <li className={style}>
                <NavLink
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                    to={`/category/clothes`}>
                    Clothes
                </NavLink>
            </li>
            <li className={style}>
                <NavLink
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                    to='/category/electronics'>
                    Electronics
                </NavLink>
            </li>
            <li className={style}>
                <NavLink
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                    to='/category/furniture'>
                    Furnitures
                </NavLink>
            </li>
            <li className={style}>
                <NavLink
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                    to='/category/toys'>
                    Toys
                </NavLink>
            </li>
            <li className={style}>
                <NavLink
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                    to='/category/others'>
                    Others
                </NavLink>
            </li>
        </>
    }
    const renderSearcher = () => {
        return !!isLoggedIn() && <Searcher />
    }
    const renderActions = () => {
        if (isLoggedIn()) {
            return <>
                <li className="flex items-center justify-center cursor-pointer relative">
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to='/my-orders'>
                        <AiOutlineUnorderedList />
                        <span className={iconsStyle}>{order.length}</span>
                    </NavLink>
                </li>
                <li className="flex items-center justify-center cursor-pointer">
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to='/my-account'>
                        <AiOutlineUser />
                    </NavLink>
                </li>
                <li className="flex items-center justify-center cursor-pointer">
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to='/category/favorites'>
                        <MdOutlineFavoriteBorder />
                    </NavLink>
                </li>
                <li className="flex items-center justify-center cursor-pointer relative" onClick={() => setIsCheckoutOpen(!isCheckoutOpen)}>
                    <div>
                        <AiOutlineShopping />
                        <span className={iconsStyle}>{count}</span>
                    </div>
                </li>
            </>
        } else {
            return (<>
                <li className="flex items-center justify-center cursor-pointer">
                    <Link to={"/signin"}>
                        <div className="flex items-center gap-3">
                            <AiOutlineUser />
                            <span className="text-lg">Sign In</span>
                        </div>
                    </Link>
                </li>
                <span>|</span>
                <li className="flex items-center justify-center cursor-pointer">
                    <Link to={"/login"}>
                        <div className="flex items-center gap-3">
                            <AiOutlineUserAdd />
                            <span className="text-lg">Log In</span>
                        </div>
                    </Link>
                </li>
            </>)
        }
    }
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-gray-900 text-green-300">
            <ul className="flex items-center gap-3 text-lg w-full">
                <li className="font-semibold flex">
                    <img className="w-7" src={icon}></img>
                    <NavLink
                        to='/'>
                        eruShop
                    </NavLink>
                </li>
                {renderCategories()}
            </ul>
            {renderSearcher()}
            <ul className="flex items- justify-end gap-3 w-full text-2xl">
                {renderActions()}
            </ul>
        </nav>
    )
}

export { NavBar }