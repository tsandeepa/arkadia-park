import styled from "styled-components";

export const CommunityBannerStyled = styled.div`
  height: 80vh;
  .banner-overlay__bt-group {
    position: absolute;
    top: 0;
    padding: 80px 0;
    height: 100%;
    max-height: 80vh;
    width: 100%;
    left: 0;
    h2 {
      font-size: 55px;
      font-weight: 800;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
