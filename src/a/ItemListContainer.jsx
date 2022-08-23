import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../Util/firestoreFetch";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    firestoreFetch(idCategory)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [idCategory]);

  return (
    <>
      {ItemList ? (
        <Container>
          <ProdContainer>
            <ItemList items={datos} />
          </ProdContainer>
        </Container>
      ) : (
        <>
          <Carga>
            <LoadingList>LOADING</LoadingList>
            <div className="cargando"></div>
          </Carga>
        </>
      )}
    </>
  );
};

export default ItemListContainer;
