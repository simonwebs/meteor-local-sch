import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { ContactsCollection } from '../collections/ContactsCollection';

Meteor.methods({
  'contacts.insert'({
    name,
    email,
    subject,
    message,

  }) {
    check(name, String);
    check(email, String);
    check(subject, String);
    check(message, String);

    if (!name) {
      throw new Meteor.Error('Name is required.');
    }
    if (!email) {
      throw new Meteor.Error('Email is required.');
    }
    if (!subject) {
      throw new Meteor.Error('Subject is required.');
     }
      if (!message) {
        throw new Meteor.Error('Message is required.');
      }

    return ContactsCollection.insert({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });
  },
  'contacts.archive'({ contactId }) {
    check(contactId, String);

    ContactsCollection.update(
      { _id: contactId },
      { $set: { archived: true } }
    );
  },
  'contacts.remove'({ contactId }) {
    check(contactId, String);

    ContactsCollection.remove(contactId);
  },
});
