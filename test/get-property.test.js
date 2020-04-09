import { expect, should } from '@open-wc/testing';
import getProperty from '../src/get-property.js';

describe('getProperty', () => {
  it('returns a direct property value', () => {
    const obj = {
      name: 'Maxwell',
      age: 10,
    };
    expect(getProperty('name', obj)).equal(obj.name);
    expect(getProperty('age', obj)).equal(obj.age);
  });

  it('returns a nested property', () => {
    const obj = {
      name: 'Maxwell',
      address: {
        street: 'Awesome Street',
        city: 'Wonderful Town',
        country: {
          name: {
            fr: 'Le Plus Grand Pays',
            en: 'The greatest Country',
          },
        },
      },
    };
    expect(getProperty('address.street', obj)).equal(obj.address.street);
    expect(getProperty('address.country.name', obj)).equal(obj.address.country.name);
  });

  it('does not work with arrays elements', () => {
    const obj = {
      games: ['Monopoli', 'Cards'],
    };
    should().not.exist(getProperty('games[0]', obj));
  });

  it('silently returns nothing for missing property', () => {
    const obj = {
      name: 'Maxwell',
    };
    should().not.exist(getProperty('age', obj));
  });

  it('throws with a null or undefined object', () => {
    const obj = null;
    expect(() => getProperty('myProp', obj)).to.throw();
    expect(() => getProperty('myProp')).to.throw();
  });
});
