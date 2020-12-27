import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Index() {
  // console.log('====================================');
  // console.log(posts);
  // console.log('====================================');
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
// Index.getInitialProps = async () => {
//   const res = await fetch(
//     `https://agitated-yalow-4c36d7.netlify.app:3000/api/createdPost/posts`
//   );
//   const data = await res.json();
//   return { posts: data };
// };

// http://localhost
