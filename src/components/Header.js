import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div>
      <div class="header-wrapper">
        <div class="main-info">
          <h1>web development and websites promotions</h1>
          <Typed
            className="typed-text"
            strings={[
              "Web Design",
              "Web Development",
              "Facebook Ads SMM",
              "Google Ads",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <a className="btn-main-offer" href="#">contact me</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
