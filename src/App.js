import { Menu } from "./components/Layout/Menu";
import { BrowserRouter } from "react-router-dom";

import { default as Rotas } from "./rotas";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Rotas />
    </BrowserRouter>
  );
}
export default App;
