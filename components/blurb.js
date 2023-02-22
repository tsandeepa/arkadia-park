import { BlurbStyled } from "../styles/styled/components/blurbBox.styled";

const Blurb = ({ bl_top, bl_Title, bl_img, bl_desc }) => {
  return (
    <BlurbStyled>
      <img src={bl_img} alt="" />
      <div>
        <h5>{bl_top}</h5>
        <h3>{bl_Title}</h3>
        <p>{bl_desc}</p>
      </div>
    </BlurbStyled>
  );
}

export default Blurb;