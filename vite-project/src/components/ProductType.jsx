import React from "react";

const ProductType = () => {
  let items = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  return (
    <div className="grid gap-1 grid-rows-2 grid-cols-10 bg-amber-200 m-4">
      {items.map((item) => (
        <div className="bg-amber-200 w-1000px h-100px p-5"> {item}</div>
      ))}
    </div>
  );
};

export default ProductType;
