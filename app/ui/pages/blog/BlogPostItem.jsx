// @ts-nocheck
import React, { memo } from 'react'
import { IoIosCheckboxOutline } from "react-icons/io";


export const BlogPostItem = memo(({ blogPost, onMarkAsDone, onDelete }) => (
  <div className='w-3 bg-emerald-400'>
  <div>
    <IoIosCheckboxOutline
     
      isChecked={blogPost.done}
      onChange={() => onMarkAsDone(blogPost._id)}
    >
      {blogPost.description}
    </IoIosCheckboxOutline>
  </div>
  <div className='bg-sky-500'>
    <button
     
      onClick={() => onDelete(blogPost._id)}
    >
      Remove
    </button>
  </div>
</div>
));