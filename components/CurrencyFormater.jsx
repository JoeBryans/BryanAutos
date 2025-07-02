import React from "react";

const CurrencyFormater = ({ price }) => {
  //   const currency = price.toLocaleString("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //     minimumFractionDigits: 0,
  //   });

  const amount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return <div>{amount}</div>;
};

export default CurrencyFormater;
