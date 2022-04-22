import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <div class="footer">
      <div class="inner-footer">
        <div class="footer-items">
          <h2 className="text-start">Organic Mart & Grocery</h2>
          <p>
            Organic Mart & Grocery - worldwide Grocery store since 2022. We sell
            over 2000+ Category products on our web-site.
          </p>
        </div>

        {/* <!--  for quick links  --> */}
        <div class="footer-items">
          <h3 className="text-start">Quick Links</h3>
          <div class="border1"></div>
          {/* <!--for the underline --> */}
          <ul>
            <Link to="/">
              <li className="text-start">Home</li>
            </Link>
            <Link to="/">
              <li className="text-start">Search</li>
            </Link>
            <Link to="/">
              <li className="text-start">Contact</li>
            </Link>
            <Link to="/">
              <li className="text-start">About</li>
            </Link>
          </ul>
        </div>

        {/* <!--  for some other links --> */}
        <div class="footer-items">
          <h3 className="text-start">Company</h3>
          <div class="border1"></div>
          {/* <!--for the underline --> */}
          <ul>
            <Link to="/">
              <li className="text-start">Privacy Policy</li>
            </Link>
            <Link to="/">
              <li className="text-start">Returns</li>
            </Link>
            <Link to="/">
              <li className="text-start">Terms & Conditions</li>
            </Link>
            <Link to="/">
              <li className="text-start">Checkout</li>
            </Link>
          </ul>
        </div>

        {/* <!--  for contact us info --> */}
        <div class="footer-items">
          <h3 className="text-start">Contact us</h3>
          <div class="border1"></div>
          <ul>
            <li className="text-start">
              <i class="fa fa-map-marker" aria-hidden="true"></i>Bangladesh
            </li>
            <li className="text-start">
              <i class="fa fa-phone" aria-hidden="true"></i>0123456789
            </li>
            <li className="text-start">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              organicmart@gmail.com
            </li>
          </ul>

          {/* <!--   for social links --> */}
          <div class="social-media text-start">
            <Link to="/">
              <i class="fab fa-instagram"></i>
            </Link>
            <Link to="/">
              <i class="fab fa-facebook"></i>
            </Link>
            <Link to="/">
              <i class="fab fa-google-plus-square"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
        <div className="bg-dark text-white text-center">
            <p>Copyrights by Sahara Banu at Company</p>
        </div>
        </div>
    );
};

export default Footer;