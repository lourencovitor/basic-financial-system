/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
export default (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};
