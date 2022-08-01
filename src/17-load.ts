import _ from 'lodash';

const data = [
  {
    username: 'nico',
    role: 'admin',
  },
  {
    username: 'valentina',
    role: 'seller',
  },
  {
    username: 'zulema',
    role: 'seller',
  },
  {
    username: 'santiago',
    role: 'customer',
  },
];

const rta = _.groupBy(data, (item) => item.role);

console.log(rta);



