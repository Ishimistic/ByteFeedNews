import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import countries from "./Countries";
import logo from "../assets/logo.png";
// import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [active, setActive] = useState(false);
  // const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [theme, setTheme] = useState("light-theme");

  let category = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
    "politics",
  ];

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  function toggleTheme() {
    setTheme(theme === "light-theme" ? "dark-theme" : "light-theme");
  }

  return (
    <header>
      <nav className="navbar fixed top-0 left-0 w-full h-auto bg-gray-800 z-10 flex items-center justify-around">
        <img src={logo} alt="NewsAggre" width="150" height="120" />
        {/* <Search /> */}
        <ul
          className={`nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end ${
            active ? "active" : ""
          }`}
        >
          {/* All News opt */}
          <li>
            <Link
              className="no-underline font-semibold"
              to="/"
              onClick={() => setActive(!active)}
            >
              All News
            </Link>
          </li>
          {/* Top headlines opt */}
          <li className="dropdown-li">
            <Link
              className="no-underline font-semibold flex items-center gap-2"
              // onClick={() => {
              //   setShowCategoryDropdown(!showCategoryDropdown);
              //   setShowCountryDropdown(false); // Close other dropdown if open
              // }}
              onClick={() => {
                setShowCategoryDropdown(!showCategoryDropdown);
              }}

            >
              Top-Headlines{" "}
              <FontAwesomeIcon
                className={`down-arrow-icon ${
                  showCategoryDropdown ? "down-arrow-icon-active" : ""
                }`}
                icon={faCircleArrowDown}
              />
            </Link>
            <ul
              className={`dropdown p-2 ${
                showCategoryDropdown ? "show-dropdown" : ""
              }`}
            >
              {category.map((element, index) => (
                <li key={index}>
                  <Link
                    to={`/top-headlines/${element}`}
                    className="flex gap-3 capitalize"
                    onClick={() => {
                      setActive(!active);
                      setShowCategoryDropdown(!showCategoryDropdown);
                    }}
                  >
                    {element}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {/* Country list */}
          {/* <li className="dropdown-li">
            <Link
              className="no-underline font-semibold flex items-center gap-2"
              onClick={() => {
                setShowCountryDropdown(!showCountryDropdown);
                setShowCategoryDropdown(false); // Close other dropdown if open
              }}
            >
              Country{" "}
              <FontAwesomeIcon
                className={`down-arrow-icon ${
                  showCountryDropdown ? "down-arrow-icon-active" : ""
                }`}
                icon={faCircleArrowDown}
              />
            </Link>
            <ul
              className={`dropdown p-2 ${
                showCountryDropdown ? "show-dropdown" : ""
              }`}
            >
              {countries.map(({ iso_2_alpha, png, countryName }, index) => (
                <li key={index}>
                  <Link
                    to={`/country/${iso_2_alpha}`}
                    className="flex gap-3"
                    onClick={() => {
                      setActive(!active);
                      setShowCountryDropdown(!showCountryDropdown);
                    }}
                  >
                    <img
                      src={png}
                      srcSet={`https://flagcdn.com/32x24/${iso_2_alpha}.png 2x`}
                      alt={countryName}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/32x24";
                      }}
                    />
                    <span>{countryName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li> */}
          {/* Toggle btn */}
          <li>
            <Link
              className="no-underline font-semibold"
              to="#"
              onClick={(e) => {
                e.preventDefault();
                toggleTheme();
              }}
            >
              <input type="checkbox" className="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="checkbox-label">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <span className="ball"></span>
              </label>
            </Link>
          </li>
        </ul>
        <div
          className={`ham-burger z-index-100 ${active ? "ham-open" : ""}`}
          onClick={() => setActive(!active)}
        >
          <span className="lines line-1"></span>
          <span className="lines line-2"></span>
          <span className="lines line-3"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
