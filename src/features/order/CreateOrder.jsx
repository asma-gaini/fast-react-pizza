import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../srvices/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);

  //ma mikhaym in cart ya sabad kharid ru tu form ersal konim ta tu action besh dastresi dashte bashim
  //haminjori azash estefade nemikonim chon sabad kharid badan gharare az redux biyad
  //ma mitunim dade tu form gharar bedim bedon inke joze filde form bashe ba type hidden
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      {/* bara ersal in form miyaym az noe form tu roter estefade mikonim(Form) yani dg az submit o handler estefade nakardim
      hata bara input haye form state niyaz nist, va method ru moshakhas mikonim
      in ravesh faghat bara POST, PATCH ,DELETE kar mikone vali bara get injor nist
      action masiri ast k form bayad onja ersal beshe k router b tor khodkar b nazdiktarin masir mide yani niyazi nist bezanim order/new 
      badesh mese loader bayad ye function dashete bashim k action mikhad azash export she
      */}

      {/* ersal ba router 3 marhale dasht 1) omadim Form ru jaygozin form kardim
          2) omadim tabe action ru ba requestemon neveshtim 
          3) bayad in form o tabe ru b ham vasl konim b masir mirim va action ru b masir vasl mikonim aval tu app import mikonim*/}

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          {/* value chon havi maghadire obj hast vali ma faghat mitunim inja string dashte bashim */}
          <button>Order now</button>
        </div>
      </Form>
    </div>
  );
}

//be sorat gharardadi esmesho action mizarim
//harvaght k Form bala ersal beshe betor khodkar action seda mishe va darkhast ersal mishe
export async function action({ request }) {
  //in request hamin requestiye k daryaft karmin va in ye api web hast va formData tavasote mororgar eraye mishe
  //tabe formData ye rabet hast k mizare form ha mese form ha tu html amal konan va betunim anasur vorudi mese fild haye matni , ...ru jamavari konim
  const formData = await request.formData();
  //omadim formi k jam kardim ru b obj tabdil karim
  const data = Object.fromEntries(formData);

  //data ru k log migereftim priority hamishe nadash faghat vaghti bood mizad on k ma mikhastim false and true bashe
  //va mohtavaye cart ru b sorat araye dar ovordim
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  const newOrder = await createOrder(order);
  //tu apiResturant mibinim k createOrder on data ru barmigardone pas mitunim azash estefade konim ta moshtari ru b masir order/id bebarim ta sefaresh ru bbebine
  //vali nemitunim az navigate hook estefade konim chon ghabln ham goftim hook ha dar component mitunan estefade beshan faght
  // pas miyaym az redirect estefade mikonim k ye response jadid ya ye darkhast jadid ijad mikone
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
