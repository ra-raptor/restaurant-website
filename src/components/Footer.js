import React from "react";
import "../styles/footer.css";
function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>Desi Cafe</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li>
                <a href="/">Partnership</a>
              </li>
              <li>
                <a href="/">Bookings</a>
              </li>
              <li>
                <a href="/">Order Status</a>
              </li>
              <li>
                <a href="/">Payment Options</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Address</h4>
            <ul>
              <li>
                <a href="/">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate adipisci quia ab omnis id ipsum quae inventore
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="/">
                {/* <i class="fab fa-google"></i> */}
                Facebook
              </a>
              <a href="/">
                {/* <i class="fab fa-facebook-f"></i> */}
                Instagram
              </a>
              <a href="/">
                {/* <i class="fab fa-instagram"></i> */}
                Twitter
              </a>
              <a href="/">
                {/* <i class="fab fa-twitter"></i> */}
                Pintrest
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
