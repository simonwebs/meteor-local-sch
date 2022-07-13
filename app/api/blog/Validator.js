import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { BlogPost } from './BlogPost';

export const validateBlogPostId = ({ blogPostId }) => {
  try {
    check(blogPostId, String);
  } catch (exception) {
    throw new Meteor.Error('403', 'The information entered is not valid');
  }
};

export const validateBlogPostOwner = ({ blogPostId }) => {
  const blogPost = BlogPost.findOne({
    _id: blogPostId,
    userId: Meteor.userId(),
  });
  if (!blogPostId) {
    throw new Meteor.Error('Error', 'Access denied.');
  }
};