import { Col, Row } from "react-bootstrap";
import { MiniGamesStyled } from "../styles/styled/components/mini-games/miniGames.styled";
import { Container } from "../styles/styled/layout.styled";

const MiniGames = () => {
  return (
    <MiniGamesStyled>
      <Container>
        <div className="mg-header">
          <h2>Mini-Games</h2>
          <p>Up for the challenge? </p>
        </div>
        <div className="mg-banner">
          <img src="Images/mini-g-main.png" alt="" />
        </div>
        <div className="mg-section">
          <h3>Arkadia Pinball Mini-Game</h3>
          <p>
            Arkadia Pinball Mini-game is a brand new challenge for player to try
            and compete for points by collecting points and climb the
            Leaderboard. There are two types of leaderboards:
          </p>
          <p>
            Community Leaderboard- The community leaderboard will stack all the
            points for the community that you have voted. The community with the
            most points until the event ends will win the following prizes:
          </p>

          <Row>
            <Col md={6}>
              <div className="mg-section__grid-block">
                <h5>Rewards </h5>
                <img src="Images/mg-s1.png" alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className="mg-section__grid-block">
                <h5>Rewards </h5>
                <img src="Images/mg-s1.png" alt="" />
              </div>
            </Col>
          </Row>
          <p>
            Community Leaderboard- The community leaderboard will stack all the
            points for the community that you have voted. The community with the
            most points until the event ends will win the following prizes:
          </p>
          <Row>
            <Col md={6}>
              <div className="mg-section__grid-block">
                <h5>Rewards </h5>
                <img src="Images/mg-s1.png" alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className="mg-section__grid-block">
                <h5>Rewards </h5>
                <img src="Images/mg-s1.png" alt="" />
              </div>
            </Col>
          </Row>

          <div className="mg-preview-lg">
            <img src="/Images/mg-1.png" alt="" />
            <h3>Cupcake Affair Mini-Game</h3>
            <p>
              Cupcake affair Mini-Game is is a brand new challenge for player to
              try and compete for points by collecting points and climb the
              Leaderboard. There are two types of leaderboards:{" "}
            </p>
          </div>
        </div>
      </Container>
    </MiniGamesStyled>
  );
};

export default MiniGames;
