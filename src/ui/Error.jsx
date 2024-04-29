import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  //chon k darim migim vaghti khata dad biya inja pas in b error dasresi dare va
  //mitonim khode payam asli error ru ham neshon bedim ba custom hook
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
