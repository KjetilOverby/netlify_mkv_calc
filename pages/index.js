import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import axios from 'axios';
import PostSearch from '../components/PostSearch';

export default function Index() {
  const [posts, setPosts] = useState();

  const api = axios.create({
    baseURL: process.env.API_URL,
  });

  useEffect(async () => {
    try {
      await api.get('/', {}).then((res) => {
        setPosts(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div>{posts && <PostSearch posts={posts} />}</div>;
}
