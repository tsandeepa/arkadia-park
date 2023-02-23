import styled from "styled-components";

export const WideSecStyled = styled.div`
  padding-left: calc((100% - 1220px) / 2);
  overflow: hidden;
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

  img {
    width: 100%;
    max-height: 420px;
    object-fit: cover;
  }
`;
