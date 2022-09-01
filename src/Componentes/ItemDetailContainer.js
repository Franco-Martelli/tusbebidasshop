import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { firestoreFetchOne } from "../Utils/firestoreFetch";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    firestoreFetchOne(idItem)
      .then((result) => setData(result))
      .catch((error) => console.log(error));
  }, [idItem]);

  return <ItemDetail prod={data} />;
};
export default ItemDetailContainer;