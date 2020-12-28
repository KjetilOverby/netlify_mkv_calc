import React, { useState } from 'react';
import {
  makeStyles,
  Typography,
  Input,
  TextField,
  Grid,
  Button,
  Hidden,
} from '@material-ui/core';
import Link from 'next/link';
import MyButton from './MyButton';
// import Header from './Header';
// import Footer from './Footer';
import theme from '../src/theme';
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    flexDirection: 'row',
    marginTop: '3.5rem',
    flexWrap: 'wrap',

    [theme.breakpoints.down('xl')]: {},
    [theme.breakpoints.down('sm')]: {},
  },
  /////////// Experiental search container
  postSearchContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '3rem',
    flexGrow: '1',
    minWidth: '50vw',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    alignItems: 'center',
    minHeight: '100vh',
    //background: theme.palette.background.main,

    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      paddingLeft: '0',
      width: '40vw',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      boxShadow: '-5px -5px 10px rgba(0,0,0,.4)',

      paddingTop: '30vh',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '2vh',
    },
  },

  searchContainerWrapper: {
    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
      //background: theme.palette.leftBackground.main,
    },
    [theme.breakpoints.down('sm')]: {},
  },
  //
  // https://images.unsplash.com/photo-1547518717-52a1971c2c96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1833&q=80
  searchContainer: {
    flexGrow: 1,
    padding: '2.5rem',
    flexDirection: 'column',
    background: `linear-gradient(rgba(6, 37, 61, .95), rgba(0, 0, 0, .8)) , url("https://images.unsplash.com/photo-1522609163202-be0734d421e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60")`,
    width: '50vw',
    backgroundSize: 'cover',
    backgroundPosition: '60%',
    minHeight: '100vh',
    [theme.breakpoints.down('lg')]: {},

    [theme.breakpoints.up('lg')]: {
      paddingLeft: '10vw',
      paddingTop: '15rem',
    },

    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      minHeight: '30vh',
    },
    [theme.breakpoints.up('sm')]: {
      height: '30vh',
      position: 'fixed',
    },
  },

  textField: {
    marginRight: '3rem',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '2rem',
      flexDirection: 'row',
    },
  },
  btn: {
    marginLeft: '5rem',
  },
  myButtonContainer: {
    width: '30em',
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
  },
  info: {
    //color: theme.palette.textLeft.main,
    fontFamily: 'Special Elite, cursive',
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.5rem',
    },
  },
  infoContainer: {
    marginTop: '-7rem',
    fontFamily: 'Special Elite, cursive',
    marginLeft: '-4rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '.5rem',
      marginTop: '1rem',
      marginLeft: '1rem',
    },
  },
  postHeader: {
    margin: '2rem 0',
    //color: theme.palette.text.main,
    fontFamily: 'Special Elite, cursive',
    fontSize: '1.8rem',
  },
  imgOne: {
    height: '20rem',
    margin: '-10rem 4rem 0 -5rem',
  },
}));
const PostSearch = ({ posts, user }) => {
  const classes = useStyles();

  const [searchInput, setSearchInput] = useState('');

  const getSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const search = posts.filter((post) => post.header.includes(searchInput));

  return (
    <>
      {/*  <Header getSearch={getSearch} user={user} /> */}

      <Grid container className={classes.mainContainer}>
        <Grid item className={classes.searchContainerWrapper}>
          <Grid container className={classes.searchContainer}>
            <Grid item>
              <Grid className={classes.infoContainer} item>
                <Typography className={classes.info}>
                  Antall poster: {posts.length}
                </Typography>
                {/*     <Typography className={classes.info}>
                  Søkeresultat: {!searchInput && ' Ingen søk'}{' '}
                  {searchInput && search.length != 0 && (
                    <span style={{ color: theme.palette.text.main }}>
                      {search.length}
                    </span>
                  )}{' '}
                  {search.length === 0 && (
                    <span style={{ color: 'indianred' }}>Ingen treff</span>
                  )}
                </Typography> */}
              </Grid>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>

        <Grid item>
          <div className={classes.postSearchContainer}>
            <div className={classes.headerWrapper}>
              <Typography className={classes.postHeader} variant="h4">
                MKV poster
              </Typography>
            </div>
            {search.map((post) => {
              return (
                <Link href={`/post_id/${post._id}`}>
                  <div className={classes.myButtonContainer}>
                    <MyButton header={post.header} />
                  </div>
                </Link>
              );
            })}
          </div>
        </Grid>
      </Grid>
      {/*  <Footer user={user} /> */}
    </>
  );
};

export default PostSearch;
