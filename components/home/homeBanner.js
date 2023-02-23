import { ButtonStyled } from "../../styles/styled/components/buttonTheme.styled";
import { BannerStyled } from "../../styles/styled/components/home/homeBanner.styled";
import { Container } from "../../styles/styled/layout.styled";

const HomeBanner = () => {
  return (
    <BannerStyled>
      <video autoPlay playsInline muted loop={true}>
        <source src="videos/shot1.mp4" type="video/mp4"></source>
        {/* <source src="https://youtu.be/Pj3MGAlcfyo" type="video/mp4"></source> */}
      </video>
      <div className="banner-overlay">
        <Container>
          <h2>
            Join the Arkadia <br />
            theme park Now
          </h2>
          <div className="banner-overlay__bt-group">
            <button className="btn bt-primary">LEARN MORE</button>
            <button className="btn bt-light">PLAY NOW</button>
          </div>
        </Container>
      </div>
    </BannerStyled>
  );
};

export default HomeBanner;
