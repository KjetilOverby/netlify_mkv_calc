import React from 'react';
import { makeStyles, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  hylse: {
    background: 'linear-gradient(rgb(200, 200, 200), rgb(66, 66, 66))',
    height: '7rem',
    display: 'flex',
    alignItems: 'center',
    zIndex: 0.5,
    boxShadow: '1px 1px 20px black',
    margin: '40% 10em',
    [theme.breakpoints.down('xl')]: {
      width: '60rem',
    },
    [theme.breakpoints.down('lg')]: {
      width: '40rem',
      height: '5rem',
    },

    [theme.breakpoints.down('md')]: {
      width: '68vw',
      height: '5rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '92vw',
      marginLeft: '13rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '21.5rem',
      height: '3rem',
      marginLeft: '13rem',
    },
  },
  hylseKile: {
    height: '2rem',
    width: '80rem',
    background: 'linear-gradient(rgb(204, 204, 204), rgb(70, 69, 69))',
    boxShadow: 'inset 4px 1px 3px rgb(70, 69, 69)',
    borderBottomRightRadius: '10px',
    borderTopRightRadius: '10px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    zIndex: 10,
    borderTopLeftRadius: '40px',
    borderBottomLeftRadius: '40px',
    border: '1px solid gray',
    zIndex: 0.5,
    [theme.breakpoints.down('xl')]: {
      width: '90rem',
      marginLeft: '-2rem',
    },
    [theme.breakpoints.down('lg')]: {
      width: '65rem',
      height: '1.5rem',
      marginLeft: '-1.2rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '86.2vw',
      height: '1.5rem',
      marginLeft: '-1.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '19.3rem',
      height: '.8rem',
      marginLeft: '-1rem',
    },
  },
  hylseScrewHole: {
    height: '2em',
    width: '2em',
    background: '#2f2f2f',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      height: '1rem',
      width: '1rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '1rem',
      width: '1rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '.5rem',
      width: '.5rem',
    },
  },
  screwHead1: {
    height: '1.7em',
    width: '1.7em',
    background: '#5b5b5b',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      height: '0.7rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '0.7rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '0.5rem',
    },
  },
  screwHead2: {
    height: '1em',
    width: '1em',
    background: '#2f2f2f',
    borderRadius: '50%',
    boxShadow: 'inset 1px 1px 6px white',
    [theme.breakpoints.down('xs')]: {
      height: '.5em',
      width: '.5em',
    },
  },
  hylseStart: {
    height: '10rem',
    background: 'linear-gradient(rgb(184, 184, 184), rgb(56, 56, 56))',
    borderRadius: '5px',
    boxShadow: '10px 10px 30px black',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid gray',
    width: '6rem',
    [theme.breakpoints.down('lg')]: {
      height: '6.5rem',
      width: '4.5rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '7rem',
      width: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '1.6rem',
      height: '4rem',
    },
  },
  // kileSpor: {
  //   height: '4.5em',
  //   width: '5em',
  //   background: 'rgb(56, 56, 56)',
  //   marginLeft: '2em',
  //   borderTopLeftRadius: '50%',
  //   borderBottomLeftRadius: '50%',
  //   boxShadow: 'inset 5px 4px 3px black',
  //   [theme.breakpoints.down('md')]: {
  //     height: '2rem'
  //   },
  // },
  hylseEnd: {
    height: '7rem',
    width: '5rem',
    background: 'linear-gradient(rgb(175, 175, 175), rgb(85, 85, 85))',
    right: '-2rem',
    display: 'flex',
    alignItems: 'center',
    borderBottomRightRadius: '5px',
    borderTopRightRadius: '5px',
    overflow: 'hidden',
    [theme.breakpoints.down('lg')]: {
      height: '5rem',
      width: '3.5rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '5rem',
      width: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '2.9rem',
      width: '2rem',
    },
  },
  gang: {
    height: '10rem',
    width: '0.1em',
    background: 'gray',
    margin: '0 0.1rem',
    [theme.breakpoints.down('md')]: {
      height: '10rem',
    },
  },
  '&last-child': {
    height: '9.7em',
    alignItems: 'center',
  },
  kileSporGangs: {
    height: '2rem',
    width: '2rem',
    background: 'rgb(85, 85, 85)',
    position: 'absolute',
    borderTopRightRadius: '50px',
    borderBottomRightRadius: '50px',
    marginLeft: '-.5em',
    boxShadow: 'inset 1px 9px 3px black',
    [theme.breakpoints.down('lg')]: {
      height: '1.5rem',
      width: '1.5rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '1.5rem',
      height: '1.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '1.2rem',
      height: '.8rem',
    },
  },
}));
const HylseComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.hylse}>
      <div className={classes.hylseStart}>
        <div className={classes.kileSpor}></div>
      </div>
      <div className={classes.hylseKile}>
        <div className={classes.hylseScrewHole}>
          <div className={classes.screwHead1}>
            <div className={classes.screwHead2}></div>
          </div>
        </div>
        <div className={classes.hylseScrewHole}>
          <div className={classes.screwHead1}>
            <div className={classes.screwHead2}></div>
          </div>
        </div>
        <div className={classes.hylseScrewHole}>
          <div className={classes.screwHead1}>
            <div className={classes.screwHead2}></div>
          </div>
        </div>
      </div>
      <div className={classes.hylseEnd}>
        <div className={classes.kileSporGangs}></div>
        <div className={classes.gang}></div>
        <div className={classes.gang}></div>
        <div className={classes.gang}></div>
        <div className={classes.gang}></div>
        <div className={classes.gang}></div>
        <div className={classes.gang}></div>
        <div className={classes.gang}></div>
        <div className={classes.gang}></div>
        <div className={classes.gang}></div>
        <div className={classes.gang}></div>
        <Hidden smDown>
          <div className={classes.gang}></div>
          <div className={classes.gang}></div>
          <div className={classes.gang}></div>
          <div className={classes.gang}></div>
          <div className={classes.gang}></div>
        </Hidden>
      </div>
    </div>
  );
};

export default HylseComponent;
