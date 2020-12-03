import { Navbar, Nav } from "react-bootstrap";

export const Menu = () => {
  return (
    <Navbar className="navbar-dark" bg="primary" expand="lg">
      <Navbar.Brand>colocar logo</Navbar.Brand>

      <Navbar.Toggle aria-controls="menu-topo" />

      <Navbar.Collapse id="menu-topo">
        <Nav className="ml-auto mr-3">
          <Nav.Item>
            <Nav.Link href="/" to="/">
              Nossos Produtos
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/" to="/">
              Nossas Lojas
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/" to="/">
              Pedidos
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/" to="/">
              Contatos
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
