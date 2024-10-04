import  logo  from "./logoDesktopHeader.svg";
import './Nav.css';

function Nav() {
  return (
    <div className="Nav">
        <ul>
            <li><img src={logo} alt="kfc-title" /></li>
            <li>OUR MENU</li>
            <li>STORE LOCATION</li>
            <li>ONLINE EXCLUSIVES</li>
        </ul>
    </div>
  );
}

export default Nav;