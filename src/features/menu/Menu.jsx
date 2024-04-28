import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../srvices/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  //3)get data into the component with custom hook(useLoaderData)
  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

//ma baraye vakeshi dade ha mikhaym az khode ruther estefade konim k besh loader mign
//b in sorat k harvaght on masir ru baz mikonim b sorat khodkar on data ha vakeshi beshe
//3 marhale dare 1)ijade loader(tu jayi k gharare azash estefade beshe k inja menu hast)
//2)provide(erae) loader b masir 3)provide data behesh
export async function loader() {
  //1)injad loader

  //tu inja data ha ru vakeshi mikonim va on ru barmigardonim
  //ma fetch hamon ru  dar file apiResturant ghabln gharar dadim va inja faghat farakhoni mikonim
  const menu = await getMenu();
  return menu;
}

export default Menu;
