import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import { ACTION_TYPE } from "../../utils";
import { useData } from "../../context";

export function Home() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { dataDispatch, changeTitle } = useData();
  useEffect(() => {
    changeTitle("Grab arts at ");
    axios
      .get("/api/categories")
      .then((response) => setCategories(response.data.categories))
      .catch((error) => console.log(error));
  }, []);

  const categoryHandler = (categoryName) => {
    dataDispatch({
      type: ACTION_TYPE.CATEGORY,
      payload: { [categoryName]: true },
    });
    navigate("/product");
  };
  return (
    <>
      <div className="home-container">
        <div className="home-img-container">
          <div className="bg-img-container"></div>
          <div className="home-page-text">
            <div className="main-text">
              <h4>
                Welcome to <span className="title">ArtCart</span>,
              </h4>
              <div>
                <h1 className="main-text-title">Get Your </h1>
                <h1 className="main-text-title"> Style Art</h1>
              </div>
              <Link to="/product">
                <button className="link-btn shop-now-btn">SHOP NOW</button>
              </Link>
            </div>
          </div>
          <div className="overlay"></div>
        </div>

        <div className="category-container flex-center">
          <div className="container">
            <div className="category-heading text-center">
              <h2>Featured Art Categories</h2>
              <p className="paragraph-md">
                There are many categories of<span style={{fontSize:"1.2rem",color:"blue"}}> Art </span>  available at ArtCart,shop now.
                
              </p>
            </div>
            <div className="category-row">
              {categories &&
                categories.map(({ _id, categoryName, description }) => {
                  return (
                    <div className="box" key={_id} onClick={() => categoryHandler(categoryName)}>
                      <div className="detail-box text-center">
                        <h4>{categoryName}</h4>
                        <p className="paragraph-sm">{description}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-mn">
        <section className="footer-mn-lt">
          <h2 style={{fontSize:"1.2rem",color:"skyblue"}}>ArtCart</h2>
          <p className=" hm-page-paragraph">
            Fill your house with  colorful artWork
          </p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p className="paragraph-sm">@ArtCart</p>
        </section>
        <section className="footer-mn-rt">
          <ul>
            <li style={{fontSize:"1.2rem",color:"navajowhite"}}>Connect</li>
            <li className="sign">
              <a  style={{hover:""}} href="https://github.com/settings/profile" target="_blank" className="github-logo">
                GitHub
              </a>
            </li>
          
            <li className="sign">
              <a  href="https://www.linkedin.com/in/nikhil-naroliya-a3b2a8238/" target="_blank" className="linkedin">
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
        <section className="footer-mn-rt">
          <ul >
            <li style={{fontSize:"1.2rem",color:"navajowhite"}}> Resources</li>
            <Link  to="/signup">
              <li className="sign" >Sign Up</li>
            </Link>
            <Link to="/login">
              <li className="sign" >Sign In</li>
            </Link>
          </ul>
        </section>
      </footer>
    </>
  );
}
