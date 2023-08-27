import "./Navbar.scss"

const Navbar = () => {
    return ( <div className="navbar">
        <div  className="logo">
            <img src="logo.svg" alt="" />
            <span>lamadmin</span>
        </div>
        <div className="icon">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div>
            <img alt="" />
        </div>
        <div className="notifiction">
            <img src="/notifiction.svg" alt="" />
            <span>1</span>
        </div>
        <div className="user">
            <img src="/settings.svg" alt="" />
            <span>Mahdi</span>
        </div>
        <img src="/settings.svg" alt="" />
        </div>    
    </div> );
}
 
export default Navbar;