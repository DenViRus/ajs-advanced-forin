import { orderByProps } from '../app.js';

test('check function orderByProps()', () => {
  const obj1 = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const arrArgs1 = ['name', 'level'];

  const received = orderByProps(obj1, arrArgs1);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(received).toEqual(expected);
});

test('check function orderByProps() - 2', () => {
  const obj2 = {
    level: 5,
    attack: 120,
    gender: 'male',
    name: 'маг',
    weapon: 'staff',
    health: 30,
    defence: 60,
  };
  const arrArgs2 = ['gender', 'health', 'weapon'];

  const received = orderByProps(obj2, arrArgs2);
  const expected = [
    { key: 'gender', value: 'male' },
    { key: 'health', value: 30 },
    { key: 'weapon', value: 'staff' },
    { key: 'attack', value: 120 },
    { key: 'defence', value: 60 },
    { key: 'level', value: 5 },
    { key: 'name', value: 'маг' },
  ];

  expect(received).toEqual(expected);
});
