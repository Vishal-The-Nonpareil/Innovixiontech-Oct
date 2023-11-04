import React from 'react';
import "./List.css";
import Card from   "../Card/Card";
import useFetch from "../../hooks/useFetch";

function List({ maxPrice, sort, catId }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  return (
    <div className="list">
      {loading
      ? "loading"
      : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  )
}

export default List