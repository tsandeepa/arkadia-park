import styled from "styled-components";

export const BannerStyled = styled.div`
  position: relative;
  video {
    width: 100%;
    max-height: 80vh;
    object-fit: cover;
    display: block;
  }
  .banner-overlay {
    position: absolute;
    top: 0;
    padding: 80px 0;
    height: 100%;
    max-height: 80vh;
    width: 100%;
    left: 0;
    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }

    h2 {
      font-size: 55px;
      font-weight: 800;
    }
    &__bt-group {
      display: flex;
      gap: 20px;
    }
  }
`;
