import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div>My Image Search</div>
      <div className="nav-items-right">
        <div>Lightboxes</div>
        <div>Cart</div>
        <div>Sign in</div>
      </div>
    </div>
  );
};

export default Navbar;
