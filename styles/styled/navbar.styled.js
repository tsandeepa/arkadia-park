import styled from "styled-components";

export const Topbar = styled.div`
  /* max-width: 1100px; */
  margin: 0;
  padding: 10px;
  background: #463443;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  color: #fff;
  height: 70px;
  .h-logo {
    position: relative;
    img {
      height: 73px;
      position: absolute;
      bottom: -42px;
    }
    h2 {
      font-weight: 800;
      margin-left: 130px;
      font-size: 22px;
      color: #25232c;
      text-transform: uppercase;
    }
  }
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 0;
    li {
      a {
        color: #fff;
        font-size: 18px;
      }
      button {
        background: transparent;
        padding: 0;
        border: none;
        font-size: 30px;
        cursor: pointer;
        display: flex;
        color: #494949;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    /* position: fixed; */
    /* bottom: 0; */
    /* left: 10px; */
    /* right: 10px; */
    /* z-index: 1; */
    /* margin-bottom: 10px; */
    h2 {
      display: none;
    }
  }
`;
