import "./Nav.css";
import logo from "./img/logo1.jpeg";
import Discord from "./img/Discord.png";
import Twitter from "./img/Twitter.png";

const Nav = () => {
  return (
    <div className="navbar-container">
      <div className="MainContainer navbar">
        <img className="logo" src={logo} alt="" />
        <ul className="navlinks">
          <li>
            <a href="#about" className="color-blue">About</a>
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
          <a className="mintBtn" href="#mint">
            Mint
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Nav;
