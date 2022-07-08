// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const ReEnrollementsCollection = new Mongo.Collection('reEnrollements');

const ReEnrollementsSchema = new SimpleSchema({
  name: {
    type: String,
  },

  birthDate: {
    type: String,
  },

  email: {
    type: String,
    optional: true,
  },
  grade: {
    type: String,
    regEx: SimpleSchema.RegEx.Grade,
  },
  gender: {
    type: String,
    regEx: SimpleSchema.RegEx.Gender,
  },
  imageUrl: {
    type: String,
    optional: true,
  },

  street: {
    type: String,
  },

  phone: {
    type: String,
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

ReEnrollementsCollection.attachSchema(ReEnrollementsSchema);
