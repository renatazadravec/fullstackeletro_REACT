import React from "react";
import { Row, Col } from "react-bootstrap";
import { PageTitle } from "../../components";

import { ListaCategorias } from "./ListaCategorias";
import { CardProduto } from "./CardProduto";

export default () => {
  const [produtos, setProdutos] = React.useState([]);
  const [filter, setFilter] = React.useState(null);

  React.useEffect(async () => {
    const url = "http://api.projetoloja.sytes.net/produtos-lista.php";
    const response = await fetch(url);
    setProdutos(await response.json());
  }, []);

  return (
    <>
      <PageTitle titulo="Produtos" />

      <Row className="mt-5">
        <Col md={3}>
          <ListaCategorias setFilter={setFilter} />
        </Col>

        <Col md={9}>
          <Row>
            {filter != null
              ? produtos
                  .filter((produto) => produto.slug === filter)
                  .map((produto, key) => (
                    <CardProduto data={produto} key={key} />
                  ))
              : produtos.map((produto, key) => (
                  <CardProduto data={produto} key={key} />
                ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};
