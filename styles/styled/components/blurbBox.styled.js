import styled from "styled-components";

export const BlurbStyled = styled.div`
  border: 1px solid #463443;
  img {
    width: 100%;
    display: block;
    max-height: 420px;
    object-fit: cover;
  }
  > div {
    padding: 60px;
    text-align: center;
  }
  h5 {
    color: #c7ad7b;
  }
  h3 {
    color: #ffa800;
    font-weight: 700;
    font-size: 44px;
  }
  p {
    color: #c7ad7b;
    font-size: 20px;
  }
`;
