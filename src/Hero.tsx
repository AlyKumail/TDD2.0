import "./Hero.css";
import heroimg from "./img/TDDheroPic1.png";
import heroimg2 from "./img/TDDheroPic2.png";
import heroDecor from "./img/heroHeaderDecor.png";
import buttimg from "./img/buttimg.png";
// import vidgame from "./img/vidgame.png";
import Mouse from "./img/Mouse.png";

const Hero = () => {
  return (
    <div className="hero-container" id="about">
      <div className="MainContainer hero">
        <div className="hero-left">
          <h2>
            <img className="heroDecor top" src={heroDecor} alt="" />
              Butt NFT brings passive income 
          </h2>
          <h2>
            <img className="heroDecor down" src={heroDecor} alt="" />
              <span className="color-blue">with multiple utilities</span> 
          </h2>
          <div className="hero-left-wrap">
            <div>
              <p> <span className="color-blue">01</span>  Passive Income</p>
              <p><span className="color-blue">02</span> NFT Staking</p>
              <p><span className="color-blue">03</span> Metaverse Gaming</p>
              <p><span className="color-blue">04</span> Deflationary Collection.</p>
              <p className="border-bottom-gray"><span className="color-blue">05</span> Merch store and many more</p>
            </div>

            <div className="hero-images">
              <img src={heroimg} alt="" />
              <img src={heroimg2} alt="" />
            </div>
          </div>
        </div>
        
      </div>
      <h3>
        <a href="#mint">
          <img src={Mouse} alt="" />
        </a>
      </h3>
      <img className="buttimg" src={buttimg} alt="" />
    </div>
  );
};

export default Hero;
