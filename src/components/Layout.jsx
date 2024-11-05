import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <Header />
             <Outlet/>  {/* this is used for the get the two  component common for exa header and footer are common in every page */}
            <Footer/>
        </>
    )
}

export default Layout;