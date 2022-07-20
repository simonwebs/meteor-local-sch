// @ts-nocheck
import { Migrations } from 'meteor/percolate:migrations';
import { Accounts } from 'meteor/accounts-base';
import { Wallet } from '../app/api/collections/WalletsCollection';

Migrations.add({
  version: 1,
  name: 'Add a seed username and password.',
  up() {
    Accounts.createUser({
      username: 'simon',
      password: 'abc123',
    });
  },
});

Migrations.add({
  version: 2,
  name: 'Add a few sample blogs.',
  up() {
    const createdAt = new Date();
    const { _id: userId } = Accounts.findUserByUsername('simon');
    new Wallet({
      description: 'Church Meeting',
      userId,
      createdAt,
    }).save();
    new Wallet({
      description: 'School Meeting',
      userId,
      createdAt,
    }).save();
    new Wallet({
      description: 'Field Meeting',
      userId,
      createdAt,
    }).save();
  },
});
