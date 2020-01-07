export const getMinutePriceDEPRECATED = (ddd1: number, ddd2: number) => {
  if (ddd1 === 11 && ddd2 === 16) return 1.9;
  if (ddd1 === 16 && ddd2 === 11) return 2.9;
  if (ddd1 === 11 && ddd2 === 17) return 1.7;
  if (ddd1 === 17 && ddd2 === 11) return 2.7;
  if (ddd1 === 11 && ddd2 === 18) return 0.9;
  if (ddd1 === 18 && ddd2 === 11) return 1.9;
  return 0;
};

export const priceWithPlan = (
  pricePerMinute: number,
  minutes: number,
  plan: number
) => {
  pricePerMinute += pricePerMinute * 0.1;
  const price = (minutes - plan) * pricePerMinute;
  if (price < 0) return 0;
  return price;
};

export const priceWithOutPlan = (pricePerMinute: number, minutes: number) => {
  const price = minutes * pricePerMinute;
  // if (price < 0) return 0;
  return price;
};
