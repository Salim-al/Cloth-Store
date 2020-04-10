import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";

function NavBar() {
  return (
    <nav
      className="mb-1 navbar navbar-expand-lg navbar-light bg-light "
      style={{
        clipPath: " polygon( 0 0, 100% 0, 100% 100%, 0 calc(96% - 1vw) )",
      }}
    >
      <a className="navbar-brand" href="/">
        <AiOutlineShoppingCart
          style={{ color: "#ffa45c", marginLeft: "2vm" }}
          size={45}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent-4"
        aria-controls="navbarSupportedContent-4"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/shop">
              <i className="fab fa-facebook-f"></i> SHOP
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              <i className="fab fa-instagram"></i> CONTACT
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/sign">
              <i className="fab fa-instagram"></i> SIGN IN
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <AiOutlineShopping style={{ color: "#272726" }} size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;