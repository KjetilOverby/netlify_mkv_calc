import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Index({ stars }) {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
          {stars.id}
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const stars = await res.json();
  return { stars };
};
