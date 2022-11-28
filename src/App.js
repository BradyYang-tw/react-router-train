import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import GoodBye from "./pages/GoodBye";
import Header from "./components/Header";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Header></Header>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/goodbye">
        <GoodBye />
      </Route>
      <Route path="/Product">
        <Product />
      </Route>
      <Route path="/ProductDetail/:id">
        <ProductDetail />
      </Route>
    </div>
  );
}

export default App;
