import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import {Home, About, Products, ProductDetails} from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products /> },
      { path: "/product/:title", element: <ProductDetails /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
