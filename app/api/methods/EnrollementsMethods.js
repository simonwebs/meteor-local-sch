// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { EnrollementsCollection } from '../collections/EnrollementsCollection';

Meteor.methods({
  'enrollements.insert'({
    name,
    email,
    imageUrl,
    walletId,
    health,
    country,
    fatherName,
    motherName,
    phone,
    role,
    gender,
    grade,
    religion,
    birthDate,
    street,
    prevSchool,
  }) {
    check(name, String);
    check(email, String);
    check(country, String);
    check(imageUrl, String);
    check(fatherName, String);
    check(motherName, String);
    check(health, String);
    check(grade, String);
    check(phone, String);
    check(role, String);
    check(gender, String);
    check(religion, String);
    check(birthDate, String);
    check(street, String);
    check(walletId, String);

    check(prevSchool, String);
    if (!name) {
      throw new Meteor.Error('Name is required.');
    }
    if (!email) {
      throw new Meteor.Error('Email is required.');
    }
    if (!health) {
      throw new Meteor.Error('Health Status is required.');
    }


    if (!phone) {
      throw new Meteor.Error('Phone number is required.');
    }
    if (!role) {
      throw new Meteor.Error('Role is required.');
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
    if (!country) {
      throw new Meteor.Error('Country is required.');
    }

    if (!religion) {
      throw new Meteor.Error('Religion is required.');
    }

    return EnrollementsCollection.insert({
      name,
      email,
      imageUrl,
      walletId,
      fatherName,
      motherName,
      phone,
      health,
      role,
      religion,
      gender,
      grade,
      country,
      birthDate,
      street,
      prevSchool,
      createdAt: new Date(),
    });
  },

  'enrollements.archive'({ enrollementId }) {
    check(enrollementId, String);

    EnrollementsCollection.update(
      { _id: enrollementId },
      { $set: { archived: true } }
    );
  },
  'enrollements.remove'({ enrollementId }) {
    check(enrollementId, String);

    EnrollementsCollection.remove(enrollementId);
  },
});
