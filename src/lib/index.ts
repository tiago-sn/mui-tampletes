import { PriceTable } from './types';
import { priceTable } from './priceTable';

/**
 * @param {number} from
 * @param {number} to
 * @param {number} minutes
 *
 * @returns {number[]} total - is an array of 4 values:
 * total[0] = price withou FaleMais
 * total[1] = price with FaleMais 30 minutos
 * total[2] = price with FaleMais 60 minutos
 * total[3] = price with FaleMais 120 minutos
 */
export default (
  from: 11 | 16 | 17 | 18,
  to: 11 | 16 | 17 | 18,
  minutes: number
) => {
  const minutePrice = getMinutePrice(from, to, priceTable);
  const plans = [0, 30, 60, 120];

  if (minutePrice === 0) {
    throw new Error('DDD inválido');

    return null;
  }

  let total: number[] = [];

  total = plans.map(plan => {
    return getTotal(minutePrice, minutes, plan);
  });

  return total;
};

/**
 * @param {number} from
 * @param {number} to
 *
 * @returns {number} - minute cost. if it returns 0, at least one param is invalid.
 */
export const getMinutePrice = (
  ddd1: number,
  ddd2: number,
  priceTable: PriceTable
) => {
  const price = priceTable.filter(price => {
    if (price.from === ddd1 && price.to === ddd2) return true;
    else return false;
  });

  return price[0].value;
};

export const getMinutePriceDEPRECATED = (ddd1: number, ddd2: number) => {
  if (ddd1 === 11 && ddd2 === 16) return 1.9;
  if (ddd1 === 16 && ddd2 === 11) return 2.9;
  if (ddd1 === 11 && ddd2 === 17) return 1.7;
  if (ddd1 === 17 && ddd2 === 11) return 2.7;
  if (ddd1 === 11 && ddd2 === 18) return 0.9;
  if (ddd1 === 18 && ddd2 === 11) return 1.9;
  return 0;
};

export const getTotal = (
  minutePrice: number,
  minutes: number,
  plan?: number
) => {
  let price: number;

  const minutePriceWithTax = minutePrice + minutePrice * 0.1;

  price = plan ? (minutes - plan) * minutePriceWithTax : minutes * minutePrice;

  return price > 0 ? price : 0;
};
