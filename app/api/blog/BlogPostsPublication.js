import { Meteor } from 'meteor/meteor';
import { BlogPost } from './BlogPost';

Meteor.publish('BlogPostsByLoggedUser', function publishBlogPosts() {
  return BlogPost.find({ userId: this.userId });
});