// @ts-nocheck
import { Meteor } from 'meteor/meteor';
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

Meteor.startup(() => {
  if (!WalletsCollection.find().count()) {
    WalletsCollection.insert({
      createdAt: new Date(),
    });
  }
});
