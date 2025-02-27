import { useLocation } from "react-router-dom";
import Header from "../components/Banner/Header/Header";
import Footer from "../components/Footer/Footer";
import AllRoutes from "../router/AllRoutes";


export default function Layout() {
    const { pathname } = useLocation();
    console.log('[pathname]', pathname)
    return (
        <>
            {
                pathname !== '/' && <Header />
            }
            <AllRoutes />
            <Footer />
        </>
    )
}