//createBrowserRouter dar router version 6 hastesh vaghti az in estefade konim
//mishe azash bara load dardan data ha va ersal data az tarigh submit form ,...
//estefade kard dar hali k ba ruter ghadin inkara nemishe

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
//miyaym loaderi k export kardim import konim k b masir motasel konim
//chon momkene chandta loader dashte bashim  hamin ja esmesho avaz mikonim ba as
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

//in functioni hast k ma hame masir haru dakhelesh tarif mikonim
//ba arraye e az obj ha ,k har obj ye masir hastesh
//bara estefade az natayej ono dar ye moteghayer zakhire mikonim
const router = createBrowserRouter([
  //hala ma mikhaym kolan masir asli applayout bashe   yani header va cart
  //hamvare namayesh dade beshan va faghat on vasat taghir kone
  //ma baraye masir haye tu dar tu dg mese ghabl amal nemikonim va az children estefade mikonim
  {
    //masir asli va tarh bande k path nadare
    element: <AppLayout />,

    //baraye handle kardan khataha dar router miyaym ye element khata tarif mikonim(tu router hast)
    //vaghti dar render kardan component b error khorg errorelement ru render kone
    //chon k in errorElement kharej az layout hast ye safhe dare jaygozin layout mishe k ma nemikhaym
    //pas miyaym mizarimesh zir loader chon alan tanha jayii hast k dar bargiri data momkene khata bede
    //va in balam gharar dadim chon tu har masir k b moshkel bokhore ta bala miyad
    errorElement: <Error />,

    children: [
      { path: "/", element: <Home /> },
      //2)etesal loader b masir
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      //bara barresi ye sefaresh mojod ba params
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  //bara estefade az router miyaym routerProvider ru tarif mikonim va esm moteghayer router hamono
  //b onvane props besh midim
  return <RouterProvider router={router} />;
}

export default App;
