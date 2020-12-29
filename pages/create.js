const { default: CreatePost } = require('../components/create/CreatePost');
import { makeStyles, Divider } from '@material-ui/core';
//import RawList from '../components/Lists/RawList.jsx';
import Head from 'next/head';

//https://images.unsplash.com/photo-1518200966876-6abddcb56c35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80
const useStyles = makeStyles((theme) => ({
  container: {
    background:
      'url("https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    minHeight: '150vh',
    zIndex: -100,
  },
}));
const create = (props) => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Ny post</title>
      </Head>
      <div className={classes.container}>
        <CreatePost user={props.user} url={`/api/createdPost/posts`} />
      </div>
      <Divider className={classes.divider} />
      {/* <RawList/> */}
    </>
  );
};
export default create;
