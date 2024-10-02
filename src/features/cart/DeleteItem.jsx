//chon k ma ham to sabade kharid niaz darim k betunim pak konim ham tu menu niaz darim ag pitza ru eshtebah zadim betunim pak konim'
//yani in ye joz ghabel estefade mojadad ye reuseable hastesh pas component joda minevisim
//omadim dokme delete ru az tu cartItem bardashtim va in ja gozashtimesh
//chon k bara deletekardn b id pizza niaz darim va in data ru inja nadarim b onvan props besh midim

import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
