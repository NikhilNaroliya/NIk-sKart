import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";

export function Error() {
  const navigate = useNavigate();
  return (
    <div className="error-container flex-center">
      <h1 className="text-center">404 -OOPS try something else</h1>
      <div>
        <p className="text-center paragraph-md">See something else of your interest at ArtCart</p>

        <p className="text-center paragraph-md">
          Why not try a search, or take a look at our{" "}
          <span className="popular-span" onClick={() => navigate("/product")}>
            Popular Products ?
          </span>
        </p>
      </div>
    </div>
  );
}
