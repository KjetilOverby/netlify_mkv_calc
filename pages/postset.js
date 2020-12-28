import React from 'react';
import {
  makeStyles,
  Button,
  Hidden,
  Grid,
  Typography,
} from '@material-ui/core';
import Hylse from '../components/hylse/Hylse';
import ScreenRotationIcon from '@material-ui/icons/ScreenRotation';
import Link from 'next/link';

import { useRouter } from 'next/router';
import Info from '../components/Info';

//import DeleteModal from '../components/modals/DeleteModal';

const useStyles = makeStyles((theme) => ({
  backBtn: {
    position: 'absolute',
    left: '5vw',
    bottom: '4vh',
  },
  header: {
    position: 'absolute',
    fontStyle: 'italic',
    fontSize: '2rem',
    top: '5%',
    left: '5%',
  },
  postContainer: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      height: '40vh',
    },
  },

  buttonContainer: {
    margin: '0 0 0 3rem',
    paddingBottom: '3rem',
  },
  btn: {
    marginRight: '1rem',
  },
}));
const PostSet = ({ post }) => {
  const classes = useStyles();
  const router = useRouter();
  // const firstBladeValueTop = props.post.sagsnitt

  const deletePost = async () => {
    const postId = router.query.id;
    try {
      const deleted = await fetch(`${props.deleteUrl}/${postId}`, {
        method: 'DELETE',
      });
      router.push(props.pushUrl);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {post && (
        <Typography className={classes.header}>{post.header}</Typography>
      )}

      {post && (
        <div className={classes.postContainer}>
          <Hylse post={post} />
          <Hidden smDown>
            <div className={classes.buttonContainer} container>
              <Link href="/">
                <Button className={classes.backBtn} variant="contained">
                  Tilbake
                </Button>
              </Link>
            </div>
          </Hidden>
        </div>
      )}

      <Hidden only="sm">
        <Info post={post} />
        My account // user here
      </Hidden>
    </>
  );
};

export default PostSet;

// {user !== undefined &&
//   user.sub === 'google-oauth2|106500081074791056792' && (
//     <DeleteModal delete={deletePost} post={post} user={user} />
//   )}
// {/* work account */}
// {user !== undefined &&
//   user.sub === 'auth0|5f27b78668033f003d618d38' && (
//     <DeleteModal delete={deletePost} post={post} user={user} />
//   )}

// {/* work account google auth */}
// {user !== undefined &&
//   user.sub === 'google-oauth2|101843312488184148257' && (
//     <DeleteModal delete={deletePost} post={post} user={user} />
//   )}
