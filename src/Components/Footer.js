import React from "react";
import img from "../images/JB.png";
import "../styles/footer.css";
const Footer = () => {
  return (
    <>
      <footer class="bg-black dark:bg-gray-800 pt-4 pb-8 xl:pt-8">
        <div class="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
          <div className="container1">
            <img src={img} alt="" />
            <div className="details">
              <div>Mfg. by : V.S. Chemical Industries</div>
              <div className="inl">
                (H.O)Trilokpur Road, Kalaamb,Himachal Pradesh(India)
              </div>
              <div>
                <span>&#x260E;</span> : 702-702-7033
              </div>
              <div>&#9993; : Japanbond0001@gmail.com</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
