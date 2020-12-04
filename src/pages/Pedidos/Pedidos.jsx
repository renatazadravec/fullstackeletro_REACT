import { PageTitle } from "../../components";
import { Form, Button } from "react-bootstrap";
import "./pedidos.css";

export default () => {
  const registerPedido = (event) => {
    event.preventDefault();

    var formData = new FormData(event.target);

    const url = "http://localhost/lojafullstackreactback/pedidos-guarda.php";

    fetch(url, {
      method: "POST",
      body: formData,
    }).then((response) => console.log(response));
  };
  return (
    <>
      <PageTitle titulo="Pedidos" />

      <Form onSubmit={registerPedido}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="nome_cliente"
            placeholder="Seu Nome"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            type="text"
            name="endereco"
            placeholder="Seu Endereço"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="text"
            name="telefone"
            placeholder="Seu Telefone"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nome do Produto</Form.Label>
          <Form.Control
            type="text"
            name="nome_do_produto"
            placeholder="Nome do Produto"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Valor Unitário</Form.Label>
          <Form.Control
            type="text"
            name="valor_unitario"
            placeholder="Valor Unitário"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control
            type="number"
            name="quantidade"
            placeholder="Quantidade"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Valor Total</Form.Label>
          <Form.Control
            type="text"
            name="valor_total"
            placeholder="Valor Total"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </>
  );
};
