import { getMinutePrice, getTotal } from '../index';

describe('src/lib/index/getMinutePrice()', () => {
  const ddd1 = 11,
    ddd2 = 16,
    ddd3 = 17,
    ddd4 = 18;

  it(`from ${ddd1} to ${ddd2}`, () => {
    expect(getMinutePrice(ddd1, ddd2)).toBe(1.9);
  });

  it(`from ${ddd2} to ${ddd1}`, () => {
    expect(getMinutePrice(ddd2, ddd1)).toBe(2.9);
  });

  it(`from ${ddd1} to ${ddd3}`, () => {
    expect(getMinutePrice(ddd1, ddd3)).toBe(1.7);
  });

  it(`from ${ddd3} to ${ddd1}`, () => {
    expect(getMinutePrice(ddd3, ddd1)).toBe(2.7);
  });

  it(`from ${ddd1} to ${ddd4}`, () => {
    expect(getMinutePrice(ddd1, ddd4)).toBe(0.9);
  });

  it(`from ${ddd4} to ${ddd1}`, () => {
    expect(getMinutePrice(ddd4, ddd1)).toBe(1.9);
  });
});

describe('src/lib/index/getTotal()', () => {
  it('from 11 to 16 with plan', () => {
    const minutePrice = 1.9,
      minutes = 20,
      plan = 30;

    const price = getTotal(minutePrice, minutes, plan);
    expect(price).toBe(0);
  });

  it('from 11 to 16 without plan', () => {
    const minutePrice = 1.9,
      minutes = 20;

    const price = getTotal(minutePrice, minutes);
    expect(price).toBe(38);
  });

  it('from 11 to 17 with plan', () => {
    const minutePrice = 1.7,
      minutes = 80,
      plan = 60;

    const price = getTotal(minutePrice, minutes, plan);
    expect(price).toBe(37.4);
  });

  it('from 11 to 17 without plan', () => {
    const minutePrice = 1.7,
      minutes = 80;

    const price = getTotal(minutePrice, minutes);
    expect(price).toBe(136);
  });

  it('from 18 to 11 with plan', () => {
    const minutePrice = 1.9,
      minutes = 200,
      plan = 120;

    const price = getTotal(minutePrice, minutes, plan);
    expect(price).toBe(167.2);
  });

  it('from 18 to 11 without plan', () => {
    const minutePrice = 1.9,
      minutes = 200;

    const price = getTotal(minutePrice, minutes);
    expect(price).toBe(380);
  });
});
