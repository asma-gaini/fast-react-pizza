import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

//masir asli /parent router
function AppLayout() {
  //ma mikhaym vaghti dare data ha bargozari mishe spinner bezarim pas bayad bedonim key dar hal bargozariye
  //in hook har chiz k dar hal bargozari ya ersal ya.. bashe ru neshon mide
  // vaghti azash console.log begirim state sh taghir mikone
  // bara inja moghe bargozari mizane loading vaghti bikar mishe ham mizane idle
  // pas mitunim az in estefade konim
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {/* injor hame anasor paeen ru ham neshon mide vali paeen loading  */}
      {isLoading && <Loader />}

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
