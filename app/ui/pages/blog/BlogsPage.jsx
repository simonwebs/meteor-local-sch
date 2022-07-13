// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { BlogPost } from '../../../api/blog/BlogPost';
import { BlogForm } from './BlogForm';
import { useTracker, useFind, useSubscribe } from 'meteor/react-meteor-data';
import { BlogsHeader } from './BlogsHeader';
import { BlogPostItems } from './BlogPostItems';



export const BlogsPage = () =>{
  const [hideDone, setHideDone] = useState(false);
  const isLoading = useSubscribe('blogPostsByLoggedUser');
  const userId = useTracker(() => Meteor.userId());
  const filter = hideDone ? { done: { $ne: true }, userId } : { userId };
  const blogPosts = useFind(() => BlogPost.find(filter, { sort: { createdAt: -1 } }), [
    hideDone,
  ]);
  const pendingCount = BlogPost.find({
    done: { $ne: true },
    userId,
  }).count();

  return (
    <>
      <BlogsHeader />
      <BlogForm />
      <BlogPostItems
        isLoading={isLoading}
        blogPosts={blogPosts}
        pendingCount={pendingCount}
        hideDone={hideDone}
        setHideDone={setHideDone}
      />
    </>
  );
}