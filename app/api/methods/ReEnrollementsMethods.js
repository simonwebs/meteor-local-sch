// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { ReEnrollementsCollection } from '../collections/ReEnrollementsCollection';

Meteor.methods({
  'reEnrollements.insert'({
    name,
    walletId,
    phone,
    birthDate,
    street,
    email,
    imageUrl,
    grade,
    gender,
  }) {
    check(name, String);
    check(grade, String);
    check(phone, String);
    check(email, String);
    check(imageUrl, String);
    check(gender, String);
    check(birthDate, String);
    check(street, String);
    check(walletId, String);
    if (!name) {
      throw new Meteor.Error('Name is required.');
    }

    if (!phone) {
      throw new Meteor.Error('Phone number is required.');
    }
    if (!email) {
      throw new Meteor.Error('Email is required.');
    }

    if (!imageUrl) {
      throw new Meteor.Error('Photo is required.');
    }
    if (!walletId) {
      throw new Meteor.Error('Student ID is required.');
    }

    if (!birthDate) {
      throw new Meteor.Error('Date of birth is required.');
    }
    if (!street) {
      throw new Meteor.Error('Street is required.');
    }
    if (!grade) {
      throw new Meteor.Error('Grade is required.');
    }
    return ReEnrollementsCollection.insert({
      name,
      walletId,
      phone,
      birthDate,
      email,
      imageUrl,
      street,
      gender,
      grade,
      createdAt: new Date(),
    });
  },

  'reEnrollements.archive'({ reEnrollementId }) {
    check(reEnrollementId, String);

    ReEnrollementsCollection.update(
      { _id: reEnrollementId },
      { $set: { archived: true } }
    );
  },
  'reEnrollements.remove'({ reEnrollementId }) {
    check(reEnrollementId, String);

    ReEnrollementsCollection.remove(reEnrollementId);
  },
});
