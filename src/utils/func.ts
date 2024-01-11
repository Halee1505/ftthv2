export const formatPrice = (price: number | string) => {
  //  vietnam currency
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(Number(price));
};
