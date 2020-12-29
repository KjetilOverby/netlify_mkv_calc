import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import { Button, Hidden } from '@material-ui/core';
import Link from 'next/link';
import DrawerComponent from './DrawerComponent';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import theme from '../src/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // faster-one, cursive
  title: {
    flexGrow: 1,
    display: 'none',
    fontSize: '1.6rem',
    color: '#9e9e9d',
    padding: '0 1rem',
    fontFamily: 'Special Elite, cursive',
    fontWeight: 'bold',
    /* fontFamily: 'Yeseva One, cursive',
    fontFamily: 'Kumar One, cursive', */
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    marginRight: '2vw',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  appBar: {
    background: '#3f3f3f',
  },
  newBtn: {
    marginRight: '30vw',
    //border: `1px solid ${theme.palette.text.main}`,
    //color: theme.palette.text.main,
    [theme.breakpoints.down('xl')]: {
      marginRight: '12vw',
    },
  },
  userImage: {
    height: '2rem',
    borderRadius: '50%',
    margin: '0 2rem',
    [theme.breakpoints.down('xl')]: {
      margin: '0 1rem 0 0',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0 0.5rem',
    },
  },
  userName: {
    margin: '0 2rem',
    [theme.breakpoints.down('xl')]: {
      width: '8em',
    },
  },
}));

export default function SearchAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Hidden mdUp>
            <DrawerComponent user={props.user} />
          </Hidden>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          ></IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
            MKV POST~ARKIV
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={props.getSearch}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Hidden mdDown>
            <Link href="/create">
              <Button className={classes.newBtn} variant="outlined">
                lag ny post
              </Button>
            </Link>

            {!props.user ||
              (props.user.error && (
                <Link href="/api/authentication/login">
                  <Button style={{ color: theme.palette.text.main }}>
                    <LockOpenIcon
                      style={{
                        fontSize: '1.2rem',
                        marginRight: '1rem',
                        color: theme.palette.text.main,
                      }}
                    />{' '}
                    Login
                  </Button>
                </Link>
              ))}
            {!props.user ||
              (!props.user.error && (
                <Link href="/api/authentication/logout">
                  <Button style={{ color: 'indianred' }}>
                    <LockIcon
                      style={{
                        fontSize: '1.2rem',
                        marginRight: '1rem',
                        color: 'indianred',
                      }}
                    />
                    Logout
                  </Button>
                </Link>
              ))}
          </Hidden>

          {props.user && (
            <>
              <Hidden mdDown>
                <Typography className={classes.userName}>
                  {props.user.name}
                </Typography>
              </Hidden>
              <img
                className={classes.userImage}
                src={props.user.picture}
                alt=""
              />
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
