import { useContext, useState } from "react";
import { DataContext } from "../context/data/dataContext";
import "./search.css";
import { isProductInCart, isProductInWishlist } from "../utils/cartUtils";
import { useNavigate, useParams } from "react-router";
import { useData } from "../context/data/dataContext";
import { useAuth } from "../context";
import { addToCart, addToWishlist } from "../services/cart/cartServices";
import { toast } from "react-toastify";

export function Search() {
  //---------------------------------------------------
  const { token } = useAuth();
  const { productId } = useParams();
  const [btnDisabled, setBtnDisabled] = useState(false);
  const { input } = useContext(DataContext);
  const { products, cart, dataDispatch, wishlist, setLoader, changeTitle } =
    useData();

  let result = products.filter((nam) => nam.category.toLowerCase() === input.toLowerCase());

  const product = products?.find((pro) => {
    return pro._id === productId;
  });

  const isInCart = isProductInCart(cart, product?._id);

  const addToCartHandler = (obj) => {
    token
      ? isInCart
        ? navigate("/cart")
        : addToCart(dataDispatch, obj, token, toast, setBtnDisabled)
      : navigate("/login");
  };

  return (
    <div className="search-cards">
      {/* <h1>Search page</h1> */}
      {result.length <= 0 ? (
        <h4>No products found</h4>
      ) : (
        result.map((art) => (
          <ul className="search-product-card">
            <li>
              <img className="search-image" src={art.img} />
            </li>
            <li id="art-rating">
              <span id="rating-num">{art.rating}</span>
            </li>
            <li id="search-name">{art.author}</li>
            <li id="art-price">
              <span>&#8377;</span>
              {art.price}
            </li>
            <li id="art-original-price">
              <span>&#8377;</span>
              {art.originalPrice}
            </li>
            <p style={{ color: "green" }} id="percentage-off">
              {art.percentageOff}% OFF
            </p>
            <button
              id="search-page-add-to-cart"
              onClick={() => addToCartHandler(art)}
              disabled={btnDisabled}
            >
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
              {isInCart ? "Go to Cart" : "Add to Cart"}
            </button>
          </ul>
        ))
      )}
    </div>
  );
}
