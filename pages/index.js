import React, { useEffect, useState } from 'react';

import PostSearch from '../components/PostSearch';

export default function Index({ posts, setPostID }) {
  return (
    <div>{posts && <PostSearch posts={posts} setPostID={setPostID} />}</div>
  );
}
