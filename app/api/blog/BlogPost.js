// @ts-nocheck
import { Class } from 'meteor/jagi:astronomy';
import { Mongo } from 'meteor/mongo';

const BlogPostsCollection = new Mongo.Collection('blogPosts');

export const BlogPost = Class.create({
  name: 'BlogPost',
  collection: BlogPostsCollection,
  fields: {
    description: String,
    userId: String,
    done: {
      type: Boolean,
      default: false,
    },
    createdAt: Date,
  },
});