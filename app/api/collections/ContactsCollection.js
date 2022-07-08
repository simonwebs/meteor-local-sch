// @ts-nocheck
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const ContactsCollection = new Mongo.Collection('contacts');


const ContactsSchema = new SimpleSchema({
    name: {
      type: String,
      },
       email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
      },
      imageUrl: {
          type: String,
          optional: true,
      },
          fatherName: {
          type: String,
          optional: true,
      },
          motherName: {
          type: String,
          optional: true,
      },
         prevSchool: {
          type: String,
          optional: true,
      },
          phone: {
          type: Number,
          optional: true,
      },
          birthDate: {
          type: String,
          optional: true,
      },
          street: {
          type: String,
          optional: true,
      },
          gender: {
          type: String,
          optional: true,
      },
          grade: {
          type: String,
          optional: true,
      },

        Religion: {
          type: String,
          optional: true,
      },
      archived: {
      type: Boolean,
      defaultValue: false,
      },
     walletId: {
       type: String,
       // regEx: SimpleSchema.RegEx.Id,
   },
   createdAt: {
       type: Date,
   },
  });

ContactsCollection.attachSchema(ContactsSchema);
