import { useDispatch } from "react-redux";
import { addItemToBasket, removeItemFromBasket } from "../features/basketSlice";

function Product({ title, id, price }) {
  const dispatch = useDispatch();
  const addItem = () => {
    const product = {
      id,
      title,
      price,
    };
    dispatch(addItemToBasket(product));
  };

  const removeItem = () => {
    dispatch(removeItemFromBasket({ id }));
  };

  return (
    <div className="flex justify-between items-center p-5 border-blue-700 border m-5">
      <div>
        <p>{title}</p>
        <p>${price}</p>
      </div>

      <div className="flex flex-col">
        <button
          onClick={addItem}
          className="p-4 bg-red-500 rounded-2xl focus:outline-none
      focus:ring-2 ring-red-800 hover:bg-red-300"
        >
          Add to basket
        </button>
        <button
          onClick={removeItem}
          className="p-4 mt-5 bg-red-500 rounded-2xl focus:outline-none
      focus:ring-2 ring-red-800 hover:bg-red-300"
        >
          Remove Item from Basket
        </button>
      </div>
    </div>
  );
}

export default Product;
