import styled from "styled-components";

export const WideSecStyled = styled.div`
  padding-left: calc((100% - 1220px) / 2);
  min-height: 345px;
  display: flex;
  > div {
    display: flex;
  }
  .sec-desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-top: 30px;

    h3 {
      font-size: 44px;
      font-weight: 700;
    }
    p {
      line-height: 2.3;
      opacity: 0.7;
    }
  }
  .sec-img {
    position: relative;
    img {
      width: 100%;
      max-height: 420px;
      object-fit: contain;
      position: absolute;
      bottom: 0;
    }
  }
`;
