import { CommunityBannerStyled } from "../../styles/styled/components/community/communityBanner.styled";
import { Container } from "../../styles/styled/layout.styled";

const CommunityBanner = () => {
  return (
    <CommunityBannerStyled>
      <div className="banner-overlay__bt-group">
        <Container>
          <h2>The explorers</h2>
        </Container>
      </div>

      <img src="/Images/fps2.jpg" alt="" />
    </CommunityBannerStyled>
  );
};

export default CommunityBanner;
