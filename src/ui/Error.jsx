import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  //chon k darim migim vaghti khata dad biya inja pas in b error dasresi dare va
  //mitonim khode payam asli error ru ham neshon bedim ba custom hook
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
