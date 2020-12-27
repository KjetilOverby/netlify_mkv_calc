import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import axios from 'axios';

export default function Index() {
  const [post, setPost] = useState();

  const api = axios.create({
    baseURL: 'http://localhost:9000',
    //http://10.0.0.1:9000/sawblades/
    //http://localhost:9000/sawblades
    //https://database-sawblades.ktl.vercel.app/sawblades
    //https://node-sagbladergister-ktl-k25yxmgrp.vercel.app/sawblades
  });

  useEffect(async () => {
    try {
      await api.get('/posts', {}).then((res) => {
        setPost(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          {post &&
            post.map((item) => {
              return <Typography>{item.header}</Typography>;
            })}
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
// Index.getInitialProps = async () => {
//   const res = await fetch(
//     `https://agitated-yalow-4c36d7.netlify.app/api/createdPost/posts`
//   );
//   const data = await res.json();
//   return { posts: data };
// };

// http://localhost:3000
