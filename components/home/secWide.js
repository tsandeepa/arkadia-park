import { Col, Row } from "react-bootstrap";
import { WideSecStyled } from "../../styles/styled/components/home/secWide.styled";
import { ContainerFluid } from "../../styles/styled/layout.styled";
import { motion } from "framer-motion";

const SectionWide = ({
  sec_title,
  sec_desc,
  Sec_btn_text,
  sec_bg,
  sec_img,
  sec_animate,
  sec_transition,
  sec_overflow_hidden
}) => {
  console.log(sec_bg);
  return (
    <WideSecStyled style={{ background: sec_bg.background }}>
      <ContainerFluid>
        <Row className="rm-px">
          <Col lg="6" className="sec-desc">
            <h3>{sec_title}</h3>
            <p>{sec_desc}</p>
            <button className="btn bt-primary">{Sec_btn_text}</button>
            <p>{ }</p>
          </Col>
          <Col lg="6" className="sec-img">
            <motion.img
              src={sec_img}
              alt=""
              animate={sec_animate}
              transition={sec_transition}
            />
          </Col>
        </Row>
      </ContainerFluid>
    </WideSecStyled>
  );
};

export default SectionWide;
