import React from "react";
import Item from "./Item";

const Itemlist = ({ items }) => {
  return (
    <>
    <div className='ContainerCard'>
      {items.length > 0 ? (
        items.map((prod) => <Item key={prod.id} prod={prod} id={prod.id} />)
      ) : (
        <>
            <p className="pLoading">LOADING</p>
        </>
      )}
    </div>
    </>
  );
};

export default Itemlist;