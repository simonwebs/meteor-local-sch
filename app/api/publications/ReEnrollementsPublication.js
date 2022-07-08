import { Meteor } from 'meteor/meteor';
import { ReEnrollementsCollection } from '../collections/ReEnrollementsCollection';

Meteor.publish('allReEnrollements', function publishAllReEnrollements() {
  return ReEnrollementsCollection.find(); // live query
});
