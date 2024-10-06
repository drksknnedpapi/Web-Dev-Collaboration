import logo from "./logoDesktopHeader.svg";
import './Nav.css';

function Nav() {
    return (
        <header>
            <div className="Nav">
                <ul>
                    <li><a href="/" className="title-icon"><img src={logo} alt="kfc-title" /></a></li>
                    <li><a href="/">OUR MENU</a></li>
                    <li><a href="/">STORE LOCATION</a></li>
                    <li><a href="/">ONLINE EXCLUSIVES</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Nav;