import { Outlet } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Layout = () => {
    return ( <div className="main">
        <Navbar />
        <div className="container">
            <div className="menuContainer">
                <Menu />
            </div>
            <div className="contentContainer">
                <Outlet />
            </div>
        </div>
        <Footer />
    </div> );
}
 
export default Layout;