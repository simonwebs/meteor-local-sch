// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Migrations } from 'meteor/percolate:migrations';
import '../db/migrations';

import '../app/api/collections/TransactionsCollection';
import '../app/api/collections/EnrollementsCollection';
import '../app/api/collections/ReEnrollementsCollection';
import '../app/api/collections/EmploymentsCollection';
import '../app/api/collections/ContactsCollection';

import '../app/api/methods/ContactsMethods';
import '../app/api/methods/EmploymentsMethods';
import '../app/api/methods/EnrollementsMethods';
import '../app/api/methods/ReEnrollementsMethods';
import '../app/api/methods/TransactionsMethods';


import '../app/api/publications/WalletsPublications';
import '../app/api/publications/ContactsPublication';
import '../app/api/publications/EnrollementsPublication';
import '../app/api/publications/ReEnrollementsPublication';
import '../app/api/publications/EmploymentsPublication';
import { WalletsCollection } from '../app/api/collections/WalletsCollection';
import '../infra/CustomError';

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  Migrations.migrateTo('latest');
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
  const user = Accounts.findUserByUsername(SEED_USERNAME);

  if (!WalletsCollection.find().count()) {
    WalletsCollection.insert({
      createdAt: new Date(),
    });
  }
});
