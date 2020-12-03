import { Navbar, Nav, Container } from "react-bootstrap";
import "./menu.css";
import logo from "../../images/logo.png";

export const Menu = () => {
  return (
    <Navbar className="menunav" expand="lg">
      <Container>
        <Navbar.Brand className="logo">
          <img src={logo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu-topo" />

        <Navbar.Collapse id="menu-topo">
          <Nav className="menu ml-auto">
            <Nav.Item>
              <Nav.Link className="item" href="/" to="/">
                Nossos Produtos
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="item" href="/" to="/">
                Nossas Lojas
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="item" href="/" to="/">
                Pedidos
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="item" href="/" to="/">
                Contatos
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
