// @ts-nocheck
import { BlogPostItem } from './BlogPostItem';
import { toggleBlogPostDone } from '../../../../app/api/blog/ToggleBlogPost';
import { removeBlogPost } from '../../../api/blog/RemoveBlogPost';
import React from 'react';

export const BlogPostItems = ({
  blogPosts,
  pendingCount,
  hideDone,
  setHideDone,
  isLoading,
}) => (
  <div>
    <div className='mt-2'>
      <div className='w-70 text-gray-500 font-normal'>
       <span>
          You have {blogPosts.length} {blogPosts.length === +1 ? 'blogPosts' : 'blogPosts'}
          and {pendingCount || 0} pending.
          </span>
      </div>
      <div>
        <button
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setHideDone(!hideDone)}
        >
          {hideDone ? 'Show All Jotters' : 'Show Pending'}
        </button>
      </div>
    </div>
   
      <>
        {blogPosts.map(blogPost => (
          <BlogPostItem
            key={blogPost._id}
            blogPost={blogPost}
            onMarkAsDone={blogPostId => toggleBlogPostDone.call({ blogPostId })}
            onDelete={blogPostId => removeBlogPost.call({ blogPostId })}
          />
        ))}
      </>
  
  </div>
);