import React from "react";
import { ListGroup } from "react-bootstrap";
import "./listacategorias.css";

export const ListaCategorias = ({ setFilter }) => {
  const [categorias, setCategorias] = React.useState([]);

  React.useEffect(async () => {
    const url = "http://192.168.0.104/fullstackeletro_REACT_API/categorias-lista.php";
    const response = await fetch(url);
    setCategorias(await response.json());
  }, []);

  return (
    <div className="categorias">
      <h3>Categorias</h3>

      <ListGroup variant="flush">
        <ListGroup.Item
          className="itemCategoria"
          onClick={() => setFilter(null)}
        >
          Todos
        </ListGroup.Item>
        {categorias.map((cat, key) => (
          <ListGroup.Item
            className="itemCategoria"
            key={key}
            onClick={() => setFilter(cat.slug)}
          >
            {cat.nome}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
