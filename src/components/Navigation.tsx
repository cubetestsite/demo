import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/header.css";
import navLogo from "../assets/images/logo.svg";
import ShoppingCart from "../assets/images/cart-icon.svg";
import UserAlt from "../assets/images/user-icon.svg";
import MailIcon from "../assets/images/mail-icon.svg";
import CallIcon from "../assets/images/call-icon.svg";

const Navigation: React.FC = () => {
  const cartItemCount = 9; // Example cart count, this would be dynamic in a real app

  // Separate nav items for different sections
  const mainNavItems = [
    { label: "HOME", path: "/" },
    { label: "PRODUCTS", path: "/product" },
    { label: "APPLICATIONS", path: "/applications" },
    { label: "SOFTWARE TOOLS", path: "/software_tools" },
    {
      label: "OUR STORY",
      path: "/mission-vision",
      dropdownItems: [
        { label: "MISSION & VISION", path: "/mission_vision" },
        { label: "TEAM", path: "/team" },
      ],
    },
    { label: "PARTNERSHIPS", path: "/partnership" },
    {
      label: "NEWS",
      path: "/publications",
      dropdownItems: [
        { label: "PUBLICATIONS", path: "/publications" },
        { label: "EVENTS", path: "/events" },
      ],
    },
  ];

  const cartAndLoginItems = [
    { label: "CART", path: "/cart", icon: ShoppingCart },
    { label: "LOGIN", path: "/login", icon: UserAlt },
  ];

  const mobileNavItems = [
    { label: "TDS", path: "/tds" },
    { label: "SDS", path: "/sds" },
    { label: "CAREERS", path: "/careers" },
    { label: "CONTACT US", path: "/contact_us" },
  ];

  return (
    <>
      {/* top nav starts here */}
      <div className="bg-dark fixed-top py-2 d-none d-lg-block ">
        <div className=" container-lg text-white d-flex align-item-center justify-content-between  ">
          <span className="font-semibold font-12 d-flex gap-5 ">
            <span>
              <a
                href="mailto:admin@epicbnnt.com?cc=Marie.Phelps@epicbnnt.com"
                className="text-white text-decoration-none d-flex gap-2"
              >
                <img src={MailIcon} alt="mail-icon" />
                contact@epicbnnt.com
              </a>
            </span>
            <span>
              <a
                href="tel:+1-800-581-4528"
                className="text-white text-decoration-none d-flex gap-2"
              >
                <img src={CallIcon} alt="call-icon" />
                +1-800-581-4528
              </a>
            </span>
          </span>
          <ul className="font-regular font-12 d-flex gap-3 list-unstyled">
            {mobileNavItems.map((item) => (
              <li className="nav-item mx-1" key={item.label}>
                <NavLink
                  className="nav-link font-regular font-12 text-white"
                  to={item.path}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* top nav starts here */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark primary-color fixed-top bottom-nav">
        <div className="container-lg">
          <NavLink className="navbar-brand" to="/">
            <img src={navLogo} alt="logo" />
          </NavLink>
          <ul className="navbar-nav ms-auto d-flex flex-row gap-3 me-3 d-lg-none">
            {/* CART and LOGIN items with icons */}
            {cartAndLoginItems.map((item) => (
              <li className="nav-item mx-1" key={item.label}>
                <NavLink
                  className="nav-link font-regular font-12 text-white position-relative"
                  to={item.path}
                >
                  <img src={item.icon} alt={item.label} />
                  {item.label === "CART" && cartItemCount > 0 && (
                    <span className=" cart-count position-absolute start-75 font-10 translate-middle">
                      {cartItemCount}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Desktop nav links (Main items) */}
            <ul className="navbar-nav ms-auto d- d-lg-flex">
              {mainNavItems.map((item) =>
                item.dropdownItems ? (
                  <li
                    className="nav-item dropdown mx-1 header-dropdown"
                    key={item.label}
                  >
                    <NavLink
                      className="nav-link dropdown-toggle font-regular font-12 text-white"
                      to={item.path}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {item.label}
                    </NavLink>
                    <ul className="dropdown-menu head-dropdown py-0">
                      {item.dropdownItems.map((dropdown) => (
                        <li key={dropdown.label}>
                          <NavLink
                            className="dropdown-item text-white font-12 font-regular"
                            to={dropdown.path}
                          >
                            {dropdown.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item mx-1" key={item.label}>
                    <NavLink
                      className="nav-link font-regular font-12 text-white"
                      to={item.path}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>

            <ul className="navbar-nav d-none d-lg-flex">
              {/* CART and LOGIN items with icons */}
              {cartAndLoginItems.map((item) => (
                <li className="nav-item mx-1" key={item.label}>
                  <NavLink
                    className="nav-link font-regular font-12 text-white position-relative"
                    to={item.path}
                  >
                    <img src={item.icon} alt={item.label} />
                    {item.label === "CART" && cartItemCount > 0 && (
                      <span className=" cart-count position-absolute start-75 font-10 translate-middle">
                        {cartItemCount}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile view - separate Careers and Contact Us */}
            <ul className="navbar-nav ms-auto d-lg-none border-top mt-2 pt-2">
             
              {mobileNavItems.map((item) => (
                <li className="nav-item mx-1" key={item.label}>
                  <NavLink
                    className="nav-link font-regular font-12 text-white"
                    to={item.path}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
               <li className="nav-item mx-1 mt-2 mb-3    font-regular font-14">
              <a
                href="mailto:admin@epicbnnt.com?cc=Marie.Phelps@epicbnnt.com"
                className="text-white text-decoration-none d-flex gap-2"
              >
                <img src={MailIcon} alt="mail-icon" />
                contact@epicbnnt.com
              </a>
              </li>
              <li className="nav-item mx-1 mb-3  font-regular font-14">
              <a
                href="tel:+1-800-581-4528"
                className="text-white text-decoration-none d-flex gap-2"
              >
                <img src={CallIcon} alt="call-icon" />
                +1-800-581-4528
              </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
