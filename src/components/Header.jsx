import { LOGO_URL } from "../../utils/commom";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;