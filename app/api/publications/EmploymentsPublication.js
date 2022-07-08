import { Meteor } from 'meteor/meteor';
import { EmploymentsCollection } from '../collections/EmploymentsCollection';

Meteor.publish('allEmployments', function publishAllEmployments() {
  return EmploymentsCollection.find(); // live query
});
