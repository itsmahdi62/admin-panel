import "./Navbar.scss"

import {AiOutlineAppstore, AiOutlineExpand, AiOutlineSearch, AiOutlineSetting} from "react-icons/ai"

const Navbar = () => {
    return ( <div className="navbar">
        <div  className="logo">
            <img src="logo.svg" alt="" />
            <span>lamadmin</span>
        </div>
        <div className="icons">
            <AiOutlineSearch />
            <AiOutlineAppstore />
            <AiOutlineExpand/>
            <div className="notifications">
                <img src="/notifications.svg" alt="" />
                <span>1</span>
            </div>
            <div className="user">
                <img src="https://avatars.githubusercontent.com/u/95579094?v=4" alt="" />
                <span>Mahdi</span>
            </div>
            <AiOutlineSetting />
        </div>    
    </div> );
}
 
export default Navbar;