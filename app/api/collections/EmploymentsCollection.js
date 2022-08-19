// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const EmploymentsCollection = new Mongo.Collection('employments');

const EmploymentsSchema = new SimpleSchema({
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
  gender: {
    type: String,
    regEx: SimpleSchema.RegEx.Gender,
  },
  country: {
    type: String,
    regEx: SimpleSchema.RegEx.Country,
  },
  role: {
    type: String,
    regEx: SimpleSchema.RegEx.Role,
  },
  identityRef: {
    type: String,
    regEx: SimpleSchema.RegEx.IdentityRef,
  },
  birthDate: {
    type: String,
  },

  religion: {
    type: String,
  },
  prevEmployment: {
    type: String,
  },
  street: {
    type: String,
  },
  phone: {
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
EmploymentsCollection.attachSchema(EmploymentsSchema);
