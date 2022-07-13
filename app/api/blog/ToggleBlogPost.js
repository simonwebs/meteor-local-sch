// @ts-nocheck
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { LoggedInMixin } from 'meteor/tunifight:loggedin-mixin';
import { BlogPost } from './BlogPost';
// eslint-disable-next-line import/named
import { validateBlogPostId, validateBlogPostOwner } from './Validator';

const validateInput = ({ blogPostId }) => {
  validateBlogPostId({ blogPostId });
  validateBlogPostOwner({ blogPostId });
};

export const toggleJotterDone = new ValidatedMethod({
  name: 'toggleJotterDone',
  mixins: [LoggedInMixin],
  checkLoggedInError: {
    error: 'notLoggedIn',
  },
  validate: validateInput,
  run({ blogPostId }) {
    const blogPost = BlogPost.findOne(blogPostId);
    blogPost.done = !blogPost.done;
    blogPost.save();
  },
});