// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { EmploymentsCollection } from '../collections/EmploymentsCollection';

Meteor.methods({
  'employments.insert'({
    name,
    email,
    imageUrl,
    walletId,
    country,
    health,
    gender,
    identityRef,
    phone,
    religion,
    birthDate,
    street,
    role,
    prevEmployment,
  }) {
    check(name, String);
    check(email, String);
    check(imageUrl, String);
    check(identityRef, String);
    check(role, String);
    check(health, String);
    check(phone, String);
    check(religion, String);
    check(birthDate, String);
    check(country, String);
    check(street, String);
    check(gender, String);
    check(walletId, String);

    check(prevEmployment, String);
    if (!name) {
      throw new Meteor.Error('Name is required.');
    }
    if (!email) {
      throw new Meteor.Error('Email is required.');
    }
    if (!gender) {
      throw new Meteor.Error('Gender is required.');
    }
    if (!health) {
      throw new Meteor.Error('Health status is required.');
    }

    if (!phone) {
      throw new Meteor.Error('Phone number is required.');
    }
    if (!walletId) {
      throw new Meteor.Error('Student ID is required.');
    }

    if (!birthDate) {
      throw new Meteor.Error('Date of birth is required.');
    }
    if (!street) {
      throw new Meteor.Error('Street address is required.');
    }
    if (!country) {
      throw new Meteor.Error('Country is required.');
    }

    if (!religion) {
      throw new Meteor.Error('Religion is required.');
    }
    if (!identityRef) {
      throw new Meteor.Error('ID refrnce number is required.');
    }
    if (!imageUrl) {
      throw new Meteor.Error('Photo is required.');
    }
    if (!role) {
      throw new Meteor.Error('Role is required.');
    }

    if (!prevEmployment) {
      throw new Meteor.Error('Previous Employment is required.');
    }

    return EmploymentsCollection.insert({
      name,
      email,
      identityRef,
      walletId,
      imageUrl,
      phone,
      gender,
      health,
      religion,
      country,
      role,
      birthDate,
      street,
      prevEmployment,
      createdAt: new Date(),
    });
  },
  'employments.archive'({ employmentId }) {
    check(employmentId, String);

    EmploymentsCollection.update(
      { _id: employmentId },
      { $set: { archived: true } }
    );
  },
  'employments.remove'({ employmentId }) {
    check(employmentId, String);

    EmploymentsCollection.remove(employmentId);
  },
});
