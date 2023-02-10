import "./Team.css";
import team1 from "./img/TDDteamPic.png";

const Team = () => {
  return (
    <div className="team-container" id="team">
      <h2>The Team</h2>
      <div className="MainContainer team">
        <div className="team-member">
          <div className="team-member-img">
            <img src={team1} alt="" />
          </div>
          <div className="team-member-info-wrap">
            <div className="team-member-info">
              <h1>Charlotte</h1>
              <p>NFT Designer</p>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-img">
            <img src={team1} alt="" />
          </div>
          <div className="team-member-info-wrap">
            <div className="team-member-info">
              <h1>Benjamin </h1>
              <p>Social Media Manager</p>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-img">
            <img src={team1} alt="" />
          </div>
          <div className="team-member-info-wrap">
            <div className="team-member-info">
              <h1>Nathan </h1>
              <p>Blockchain Expert</p>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="team-member-img">
            <img src={team1} alt="" />
          </div>
          <div className="team-member-info-wrap">
            <div className="team-member-info">
              <h1>Flora </h1>
              <p>UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
