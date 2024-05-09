import "../styles/navbar.css";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-text">My Image Search</div>
      <div className="nav-items-right">
        <div className="light-boxes">
          <FaRegHeart />
          <div className="light-boxes-content"> Lightboxes</div>
        </div>
        <div className="cart">
          <BsCart3 />
          <div className="cart-content"> Cart</div>
        </div>
        <div className="sign-in-button">Sign in</div>
      </div>
    </div>
  );
};

export default Navbar;
