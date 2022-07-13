import { Meteor } from 'meteor/meteor';
import { BlogsCollection } from '../collections/blogsCollection';

Meteor.publish('blogs', function publishBlogs() {
  return BlogsCollection.find(
    { userId: this.userId },
    { fields: { _id: 1, isChecked: 1, userId: 1 } }
  );
});