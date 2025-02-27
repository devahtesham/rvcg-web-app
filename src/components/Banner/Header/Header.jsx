import LOGO from "../../../assets/img/RVC-Group-Logo.webp"
import LOGO_COLOURFUL from "../../../assets/img/logo-colourful.png"
import "./Header.css"
import { NAVIGATION_MENU } from "../../../utils/utils"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getUser, removeUser, ROLE_MAPPER } from "../../../data/global"
import { DASHBOARD_URL } from "../../../config/service"


export default function Header() {
    const { pathname } = useLocation();
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate()

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const { token, user } = getUser()

    const logoutHandler = () => {
        removeUser()
        navigate('/login')
    }

    const gotoDashboard = ()=>{
        window.location.href = DASHBOARD_URL
    }
    return (
        <header className={`${isActive || pathname !== '/' ? 'active' : ''}`}>
            <div className="container-fluid">
                <div className="row py-2 align-items-center justify-content-between">
                    <div className="col-1">
                        <div className="logo">
                            <img src={isActive || pathname !== '/' ? LOGO_COLOURFUL : LOGO} alt="" className="w-100" />
                        </div>
                    </div>
                    <div className="col-xxl-8 d-flex justify-content-end">
                        <ul className="nav-items d-flex align-items-center gap-4 m-0" >
                            {
                                NAVIGATION_MENU.map((navItem, i) => (
                                    <li key={i}>
                                        <NavLink to={navItem.url}>{navItem.name}</NavLink>
                                    </li>
                                ))
                            }
                            <li>
                                <a href="tel:+1 (602) 403 4869">+1 (602) 403 4869</a>
                            </li>
                            {
                                !token && (
                                    <li>
                                        <NavLink to={"/login"}>Login</NavLink>
                                    </li>
                                )
                            }
                            {
                                !token ? (
                                    <div>
                                        <button onClick={() => navigate('/login')} className={`custom-btn ${isActive || pathname !== '/' ? 'primary-btn' : 'secondary-btn'}`}>Create a Listing</button>
                                    </div>
                                ) : (
                                    <div className="d-flex gap-3">
                                        <button onClick={logoutHandler} className={`custom-btn bg-primary-clr`}>Logout</button>
                                        <button onClick={gotoDashboard} className={`custom-btn ${isActive || pathname !== '/' ? 'primary-btn' : 'secondary-btn'}`}>{ROLE_MAPPER[user?.role]} Dashboard</button>
                                    </div>
                                )
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    )
}