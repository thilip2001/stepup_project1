import { Link } from 'react-router-dom';
import './navbar.css'

export default function NavBar() {
    const user=false;
    return (
        <div className="top">
            <div className="topLeft">e-Education</div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/viewcourse">VIEW-COURSE</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="create">CREATE-COURSE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ?(null):(
                        <ul className="topList">
                            <li className="topListItem">
                        <Link className="link" to="register"> REGISTER
                        </Link>
                        </li>
                        <li className="topListItem">
                        <Link className="link" to="login"> LOGIN
                        </Link>
                        </li>
                        </ul>
                    )
                }
            </div>
        </div>
    )
}
