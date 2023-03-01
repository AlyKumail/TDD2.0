import "./Footer.css";
import Twitter from "./img/Twitter.png";
import Discord from "./img/Discord.png";

import totop from "./img/totop.png";
import copyright from "./img/copyright.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="MainContainer footer">
        <ul className="navlinks">
          <li>
            <a href="#about">Quick Links</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#mint">Mint</a>
          </li>
          <li>
            <a href="#roadmap">Roadmap</a>
          </li>
          <li>
            <a href="https://thebutterflydiaries.gitbook.io/whitepaper/ ">Whitepaper</a>
          </li>
          <li>
            <a href="#team">The Team</a>
          </li>
          <li>
            <a href="#faq">FAQs</a>
          </li>
        </ul>

        <div className="navbar_social-links">
        <a href="https://twitter.com/TheButtNft?t=daXr9ErH40Md8wEL9Hvcdg&s=09">
            <img src={Twitter} alt="" />
          </a>
         
          <a href="https://discord.gg/4dc6FZAkEJ">
            <img src={Discord} alt="" />
          </a>
        </div>

        <a href="#"><img src={totop} alt="" /></a> 
      </div>
      <div className="MainContainer copyright">
        <p>
          {" "}
          <img src={copyright} alt="" /> 2023. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
