import _ from 'lodash';

const data = [
  {
    username: 'Jhon',
    role: 'admin',
  },
  {
    username: 'Carl',
    role: 'seller',
  },
  {
    username: 'Tary',
    role: 'customer',
  },
  {
    username: 'Jess',
    role: 'admin',
  },
];

const rta = _.groupBy(data, (item) => item.role);

console.log(rta);