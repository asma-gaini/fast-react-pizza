//createBrowserRouter dar router version 6 hastesh vaghti az in estefade konim
//mishe azash bara load dardan data ha va ersal data az tarigh submit form ,...
//estefade kard dar hali k ba ruter ghadin inkara nemishe

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";

//in functioni hast k ma hame masir haru dakhelesh tarif mikonim
//ba arraye e az obj ha ,k har obj ye masir hastesh
//bara estefade az natayej ono dar ye moteghayer zakhire mikonim
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/cart", element: <Cart /> },
  { path: "/order/new", element: <CreateOrder /> },
  //bara barresi ye sefaresh mojod ba params
  { path: "/order/:orderId", element: <Order /> },
]);

function App() {
  //bara estefade az router miyaym routerProvider ru tarif mikonim va esm moteghayer router hamono
  //b onvane props besh midim
  return <RouterProvider router={router} />;
}

export default App;
