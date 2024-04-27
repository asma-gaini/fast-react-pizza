import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import { Outlet } from "react-router-dom";

//masir asli /parent router
function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        {/* mese ghablan k khoroji masir haye tu dar tu ba outlet namayesh dade mishod */}
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
