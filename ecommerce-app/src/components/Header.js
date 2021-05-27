import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectItemsCount } from "../features/basketSlice";

function Header() {
  const itemsInBasket = useSelector(selectItemsCount);
  const history = useHistory();
  return (
    <header className="flex justify-between items-center p-4">
      {/* left side */}
      <div>
        <h1 onClick={() => history.push("/")} className="text-5xl">
          HypeBeast
        </h1>
      </div>
      {/* right side */}
      <div>
        <h3 onClick={() => history.push("/checkout")}>
          Items in your basket: {itemsInBasket}
        </h3>
      </div>
    </header>
  );
}

export default Header;
