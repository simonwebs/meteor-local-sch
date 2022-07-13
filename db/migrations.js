// @ts-nocheck
import { Migrations } from 'meteor/percolate:migrations';
import { Accounts } from 'meteor/accounts-base';
import { BlogPost } from '../app/api/blog/BlogPost';

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
    new BlogPost({
      description: 'Church Meeting',
      userId,
      createdAt,
    }).save();
    new BlogPost({
      description: 'School Meeting',
      userId,
      createdAt,
    }).save();
    new BlogPost({
      description: 'Field Meeting',
      userId,
      createdAt,
    }).save();
  },
});