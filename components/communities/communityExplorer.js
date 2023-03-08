import { Container } from "../../styles/styled/layout.styled";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { CommunityExplorerStyled } from "../../styles/styled/components/community/commExplorer.styled";

const CommExplorer = () => {
  return (
    <CommunityExplorerStyled>
      <Container>
        <span>Choose your </span>
        <h3>EXPLORER</h3>
        <p>
          Represent your community in the theme park and meet new people along
          the way! With some you might become friends with others maybe not..
        </p>
        <button className="btn bt-primary">Play Now</button>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={7} className="">
              <Nav>
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={5}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img src="/images/ex-t-1.png" alt="" />
                </Tab.Pane>
                <Tab.Pane eventKey="second">ewrewrew</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </CommunityExplorerStyled>
  );
};

export default CommExplorer;
