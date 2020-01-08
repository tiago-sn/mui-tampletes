import { getMinutePrice } from '../index';

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
