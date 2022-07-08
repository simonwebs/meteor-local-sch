import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { ContactsCollection } from '../collections/ContactsCollection';

Meteor.methods({
  'contacts.insert'({
    name,
    email,
    imageUrl,
    fatherName,
    walletId,
    motherName,
    genders,
    grades,
    phone,
    religion,
    birthDate,
    country,
    street,
    prevSchool,
  }) {
    check(name, String);
    check(email, String);
    check(imageUrl, String);
    check(fatherName, String);
    check(motherName, String);
    check(grades, String);
    check(phone, Number);
    check(genders, String);
    check(religion, String);
    check(birthDate, String);
    check(country, String);
    check(walletId, String);
    check(street, String);
    check(prevSchool, String);

    if (!name) {
      throw new Meteor.Error('Name is required.');
    }
    if (!walletId) {
      throw new Meteor.Error('Wallet ID is required.');
    }
    return ContactsCollection.insert({
      name,
      email,
      imageUrl,
      fatherName,
      walletId,
      motherName,
      genders,
      grades,
      phone,
      religion,
      birthDate,
      country,
      street,
      prevSchool,
      createdAt: new Date(),
    });
  },
  'contacts.archive'({ contactId }) {
    check(contactId, String);

    ContactsCollection.update({ _id: contactId }, { $set: { archived: true } });
  },
  'contacts.remove'({ contactId }) {
    check(contactId, String);

    ContactsCollection.remove(contactId);
  },
});
