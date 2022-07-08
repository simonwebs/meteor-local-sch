import { Meteor } from 'meteor/meteor';
import { EnrollementsCollection } from '../collections/EnrollementsCollection';


Meteor.publish('allEnrollements', function publishAllEnrollements() {
    return EnrollementsCollection.find(); // live query
});
