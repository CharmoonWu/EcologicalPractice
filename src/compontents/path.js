const { map } = require('ramda');

const pathName = [
  'user',
  'set',
  'photoWall',
  'textWall',
  'statistics',
  'quotesList',
  'map',
];

const path = map((item) => {
  if (item === 'user') {
    return {
      path: `/${item}`,
      name: item,
      state: false,
    };
  } else {
    return {
      path: `/${item}`,
      name: item,
      state: true,
    };
  }
}, pathName);

export { path };
