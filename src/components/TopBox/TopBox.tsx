import "./TopBox.scss"
import { topDealers } from "../../Data";
const TopBox = () => {
    return ( <div className="topBox">
        <h1>Top deals </h1>
        <div className="list">
            {topDealers.map(user =>(
                <div className="listItem" key={user.id}>
                    <div className="user">
                        <img src={user.icon} alt="" />
                        <div className="userTexts">
                            <span className="username">{user.username}</span>
                            <span className="email">{user.mail}</span>
                        </div>
                    </div>
                    <span className="amount">${user.amount}</span>
                </div>
            ))}
        </div>
    </div> );
}
 
export default TopBox;