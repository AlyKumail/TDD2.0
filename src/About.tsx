import "./About.css";
import aboutstar from "./img/aboutstar.png";



const About = () => {
  return (
    <div className="about-container" id="about">
        <div className="MainContainer">
      <h2> <img className="aboutstar" src={aboutstar} alt="" /> About</h2>
      <p> The Butterfly Diaries is a collection of 10,000 unique digital collectibles living on the solana blockchain and comes with multiples utilities. Creating Passive Income Source Till The Life Time. It were initially united through a passion for NFTs, Defi, Crypto and the community prosperity it brought. For years, the Butts set about their own business, lacking what they needed most: a powerful community. The Butts aim to change this narrative focusing in the crypto space by offering the Passive Income for holders.</p>
        </div>
    </div>
  );
};

export default About;
