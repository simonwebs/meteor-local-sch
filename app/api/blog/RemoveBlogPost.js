// @ts-nocheck
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { LoggedInMixin } from 'meteor/tunifight:loggedin-mixin';
// eslint-disable-next-line import/no-unresolved
import { BlogPost } from './BlogPost';
// eslint-disable-next-line import/named
import { validateBlogPostId, validateBlogPostOwner } from './Validator';

const validateInput = ({ blogPostId }) => {
  validateBlogPostId({ blogPostId });
  validateBlogPostOwner({ blogPostId });
};

export const removeBlogPost = new ValidatedMethod({
  name: 'removeBlogPost',
  mixins: [LoggedInMixin],
  checkLoggedInError: {
    error: 'notLoggedIn',
  },
  validate: validateInput,
  run({ blogPostId }) {
    BlogPost.remove(blogPostId);
  },
});