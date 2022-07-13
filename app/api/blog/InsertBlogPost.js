// @ts-nocheck
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { LoggedInMixin } from 'meteor/tunifight:loggedin-mixin';
import { check } from 'meteor/check';
// eslint-disable-next-line import/no-unresolved
import { BlogPost } from './BlogPost';
import { Meteor } from 'meteor/meteor';

const validateInput = ({ description }) => {
  try {
    check(description, String);
  } catch (exception) {
    throw new Meteor.Error('403', 'The information entered is not valid');
  }
};

export const insertBlogPost = new ValidatedMethod({
  name: 'insertBlogPost',
  mixins: [LoggedInMixin],
  checkLoggedInError: {
    error: 'notLoggedIn',
  },
  validate: validateInput,
  run({ description }) {
    const blogPost = new BlogPost({
      description,
      userId: this.userId,
      createdAt: new Date(),
    });
    blogPost.save();
  },
});