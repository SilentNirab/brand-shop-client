import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png"
const Navbar = () => {

    const NavNavLinks = <>
        <li className="font-bold text-lg">
            <NavLink to={'/'} className={({ isActive, isPending }) =>
                isActive
                    ? "border-black border-b-2 px-1 py-1"
                    : isPending
                        ? "pending "
                        : ""
            }>Home</NavLink>
        </li>
        <li className="font-bold text-lg">
            <NavLink to={'/addproducts'} className={({ isActive, isPending }) =>
                isActive
                    ? "border-black border-b-2 px-1 py-2"
                    : isPending
                        ? "pending "
                        : ""
            }>AddProducts</NavLink>
        </li>
        <li className="font-bold text-lg">
            <NavLink to={'/mycart'} className={({ isActive, isPending }) =>
                isActive
                    ? "border-black border-b-"
                    : isPending
                        ? "pending "
                        : ""
            }>My Cart</NavLink>
        </li>
        
    </>
    return (

        <div className="border-b-2 border-black">
            <div className="navbar bg-base-100 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavNavLinks}
                        </ul>
                    </div>
                    <NavLink to={'/'}>
                        <img src={logo} alt="logo" className="w-60" />
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1 space-x-4">
                        {NavNavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to={'/login'}>
                        <button className="px-4 py-2 bg-black text-white rounded-md font-medium">Login</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;