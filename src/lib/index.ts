export const getMinutePrice = ddd => {
  if (ddd === 1116) return 1.9;
  if (ddd === 1611) return 2.9;
  if (ddd === 1117) return 1.7;
  if (ddd === 1711) return 2.7;
  if (ddd === 1118) return 0.9;
  if (ddd === 1811) return 1.9;
  return 0;
};

export const getTotal = (
  minutePrice: number,
  minutes: number,
  plan?: number
) => {
  let price: number;

  price = plan ? (minutes - plan) * minutePrice : minutes * minutePrice;
  return plan > 0 ? plan : 0;
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
  return price;
};
