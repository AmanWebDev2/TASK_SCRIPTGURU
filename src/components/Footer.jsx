import React from "react";
import img1 from "../assets/footer/1.svg";
import payment from "../assets/footer/payment-method.svg";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <div className="my-3 title">About</div>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Flipkart Stories</p>
        </div>
        <div>
          <div className="my-3 title">Help</div>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Flipkart Stories</p>
        </div>
        <div>
          <div className="my-3 title">Consumer Policy</div>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Flipkart Stories</p>
        </div>
        <div>
          <div className="my-3 title">Social</div>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Flipkart Stories</p>
        </div>
        <div>
          <div className="my-3 title">Mail Us:</div>
          <div>
            <p class="add"> Buildings Alyssa, Begonia &amp; </p>
            <p class="add"> Clove Embassy Tech Village, </p>
            <p class="add">Outer Ring Road, Devarabeesanahalli Village,</p>
            <p class="add">Flipkart Internet Private Limited, </p>
            <p class="add"> Bengaluru, 560103, </p>
            <p class="add"> Karnataka, India</p>
          </div>
        </div>
        <div>
          <div className="my-3 title">Registered Office Address</div>
          <div>
            <p class="add">Flipkart Internet Private Limited, </p>
            <p class="add"> Buildings Alyssa, Begonia &amp; </p>
            <p class="add"> Clove Embassy Tech Village, </p>
            <p class="add"> Outer Ring Road, Devarabeesanahalli Village, </p>
            <p class="add"> Bengaluru, 560103, </p>
            <p class="add"> Karnataka, India </p>
            <p class="add"> CIN : U51109KA2012PTC066107 </p>
            <p class="add"></p>
            <p class="add">
              {" "}
              Telephone: <a href="tel:044-45614700">044-45614700</a>
            </p>
          </div>
        </div>
      </div>

      <div className="sub-footer">
        <div className="item">
          <img src={img1} />
          <p>Become a Seller</p>
        </div>
        <div className="item">
          <img src={img1} />
          <p>Advertise</p>
        </div>
        <div className="item">
          <img src={img1} />
          <p>Gift Card</p>
        </div>
        <div className="item">
          <img src={img1} />
          <p>Help Center</p>
        </div>
        <div className="item">&copy; 2007- 2024</div>
        <div className="item py-2">
          <img src={payment} alt="" srcset="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
