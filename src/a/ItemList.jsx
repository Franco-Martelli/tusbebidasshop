import React from "react";
import Item from "./Item";
import { Carga } from "./Styles/StyledComponents";

const Itemlist = ({ items }) => {
  return (
    <>
      {items.length > 0 ? (
        items.map((prod) => <Item key={prod.id} prod={prod} id={prod.id} />)
      ) : (
        <>
          <Carga>
            <p className="pLoading">LOADING</p>
            <div className="cargando"></div>
          </Carga>
        </>
      )}
    </>
  );
};

export default Itemlist;
