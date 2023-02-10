import "./Roadmap.css";
import roadmap1 from "./img/roadmap1.png";
import roadmap2 from "./img/roadmap2.png";
import roadmap3 from "./img/roadmap3.png";
import roadmap4 from "./img/roadmap4.png";
import roadmap5 from "./img/roadmap5.png";


const Roadmap = () => {
  return (
    <div className="roadmap-container" id="roadmap">
      <h2>Roadmap</h2>
      <div className="MainContainer roadmap">
        <div className="roadmap-row">
          <img src={roadmap1} alt="" />
          <div className="roadmap-text">
            <span className="blue-color">
                01
            </span>
            <p>Mint 10,000 Butts  (Iphone 14, Iphone 14 Pro, Apple Macbook Air, Apple Watch Series 4, Apple Ipad 9th Gen) giveaways.</p>
          </div>
        </div>

        <div className="roadmap-row">
          <img src={roadmap2} alt="" />
          <div className="roadmap-text">
            <span className="blue-color">
                02
            </span>
            <p>NFT Staking <br></br>Royalty up to 50% gets paid back.</p>
          </div>
        </div>

        <div className="roadmap-row">
          <img src={roadmap3} alt="" />
          <div className="roadmap-text">
            <span className="blue-color">
                03
            </span>
            <p>Merch Store to be launched</p>
          </div>
        </div>

        <div className="roadmap-row">
          <img src={roadmap4} alt="" />
          <div className="roadmap-text">
            <span className="blue-color">
                04
            </span>
            <p>Metaverse Gaming</p>
          </div>
        </div>

        <div className="roadmap-row">
          <img src={roadmap5} alt="" />
          <div className="roadmap-text">
            <span className="blue-color">
                05
            </span>
            <p>Deflationary Collection: Every 6 months, the royalties collected will be used to buy NFTs and burn it (from secondary marketplaces to increase value and the ROI of our investors).</p>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Roadmap;
