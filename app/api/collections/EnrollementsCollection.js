// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const EnrollementsCollection = new Mongo.Collection('enrollements');

const EnrollementsSchema = new SimpleSchema({
  name: {
    type: String,
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  health: {
    type: String,
    regEx: SimpleSchema.RegEx.Health,
  },
  country: {
    type: String,
    regEx: SimpleSchema.RegEx.Country,
  },
  grade: {
    type: String,
    regEx: SimpleSchema.RegEx.Grade,
  },
  gender: {
    type: String,
    regEx: SimpleSchema.RegEx.Gender,
  },
  birthDate: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  motherName: {
    type: String,
  },
  religion: {
    type: String,
  },
  prevSchool: {
    type: String,
  },
  street: {
    type: String,
  },
  phone: {
    type: String,
  },
  role: {
    type: String,
  },
  imageUrl: {
    type: String,
    optional: true,
  },
  walletId: {
    type: Number,
    regEx: SimpleSchema.RegEx.Id,
  },
  archived: {
    type: Boolean,
    defaultValue: false,
  },

  createdAt: {
    type: Date,
  },
});

EnrollementsCollection.attachSchema(EnrollementsSchema);
