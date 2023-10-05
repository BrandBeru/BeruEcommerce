import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Context } from "../../Context"
import { AiOutlineShopping } from "react-icons/ai"

const NavBar = () => {
    const activeStyle = 'underline underline-offset-4'

    const {count} = useContext(Context)
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white">
            <ul className="flex items-center gap-3 text-lg">
                <li className="font-semibold">
                    <NavLink
                        to='/'>
                        BeruShop
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? activeStyle : undefined}
                        to='/'>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? activeStyle : undefined}
                        to={`/${"clothes"}`}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? activeStyle : undefined}
                        to='/electronics'>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? activeStyle : undefined}
                        to='/furnitures'>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? activeStyle : undefined}
                        to='/toys'>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? activeStyle : undefined}
                        to='/others'>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li
                    className="text-black-/60">
                    brand.beru@gmail.com
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? activeStyle : undefined}
                        to='/my-orders'>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? activeStyle : undefined}
                        to='/myaccount'>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? activeStyle : undefined}
                        to='/signin'>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center justify-center">
                    <div className="text-2xl"><AiOutlineShopping /> </div>
                    {count}
                </li>
            </ul>
        </nav>
    )
}

export { NavBar }