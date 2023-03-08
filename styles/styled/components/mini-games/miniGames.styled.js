import styled from "styled-components";

export const MiniGamesStyled = styled.div`
  .mg-header {
    padding: 70px 0;
    text-align: center;
    h2 {
      font-size: 61px;
      font-weight: 700;
    }
    p {
      font-size: 20px;
    }
  }
  .mg-banner {
    max-width: 824px;
    margin: 0 auto;
    text-align: center;
    img {
      width: 100%;
    }
  }

  .mg-section {
    padding: 40px 0;
    max-width: 824px;
    margin: 0 auto;

    &__grid-block {
      margin: 30px 0;
      padding: 35px;
      background: #463443;
      h5 {
        font-size: 20px;
        margin-bottom: 35px;
      }
      img {
        width: 100%%;
        margin: 0 auto;
      }
    }
  }

  h3 {
    font-size: 28px;
    font-weight: 600;
    margin: 30px 0;
  }

  p {
    color: #c8c7d8;
    font-weight: 300;
  }
`;
