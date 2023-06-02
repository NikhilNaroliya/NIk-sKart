import { useEffect, useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../context";
import { ACTION_TYPE } from "../../utils";
import "./Navbar.css";
import { DataContext } from "../../context/data/dataContext";

export default function Navbar() {
  const {input,setInput}=useContext(DataContext)
  const { token } = useAuth();
  const { cart, wishlist, dataDispatch, setLoader, drawer, setDrawer } = useData();
  const navigate = useNavigate();
  let timer = useRef();
  // const [input, setInput] = useState("");

  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      dataDispatch({
        type: ACTION_TYPE.SEARCH,
        payload: input,
      });
      setLoader(true);
      setTimeout(() => setLoader(false), 500);
      if (input.trim().length > 0) {
        navigate("/search");
      }
     
    }, 500);
  }, [input]);

  return (
    <div className="nav-header">
      <ul className="navbar">
        <div className="navbar-main ">
          <div className="navbar-left">
            {window.location.href.includes("product") && (
              <i
                className="fa fa-bars drawer-hamberg-btn"
                aria-hidden="true"
                onClick={() => setDrawer(!drawer)}
              />
            )}
            <Link to="/">
              <h3 id="artcart">ArtCart</h3>
            </Link>
          </div>
          <div className="search-container search-mob">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
              type="search"
              name="search"
              className="search-bar"
              value={input}
              placeholder="find"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <ul className="navbar-right">
            <li>
              <div className="icon cart-badge" onClick={() => navigate("/wishlist")}>
                <i className="fa fa-heart" title="Wishlist"></i>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtopwzvCZVK2lKUhIVCArEZ_v4alv5rksUPQ&usqp=CAU"/>
                {wishlist && wishlist.length > 0 && (
                  <div className="notification-icon flex-center">
                    <span>{wishlist.length}</span>
                  </div>
                )}
              </div>
            </li>
            <li className="nav-cart" onClick={() => navigate("/cart")}>
              <div className="icon cart-badge">
                <i className="fa fa-shopping-cart" title="Cart"></i>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFK4zfpmFmtLYAUELb5V9diC7rUmJDWyWkiiIIxqTf4Hk57q-qsperbD-SOMUWuRaHrGc&usqp=CAU"/>
                {cart && cart.length > 0 && (
                  <div className="notification-icon flex-center">
                    <span>{cart.length}</span>
                  </div>
                )}
              </div>
            </li>{" "}
            <li onClick={() => navigate("/user_profile")}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnXgl5znYuiMnVKofUzat_qYNB-QerB-cO7A&usqp=CAU"
                alt="login"
                title={token ? "User Profile" : "Sign In"}
              />
            </li>
          </ul>
        </div>

      </ul>
    </div>
  );
}
