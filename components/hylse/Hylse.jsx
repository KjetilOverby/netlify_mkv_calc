import React, { useState } from 'react';
import { makeStyles, Grid, Typography, Hidden } from '@material-ui/core';
import FillRings from '../FillRings';
import RawRings from '../RawRings';
//import RawRingCreate from '../../components/create/RawRingCreate';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  background: {},
  hylseContainer: {
    display: 'flex',
    height: '50vh',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10rem 0',
    zIndex: 10,
    [theme.breakpoints.down('xl')]: {
      marginTop: '20rem',
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: '15em',
    },
    [theme.breakpoints.down('md')]: {
      margin: '5rem 0 0 5rem',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 0 0rem 0rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '30vh',
    },
  },
  ringContainer: {
    display: 'flex',
    height: '20em',
    position: 'absolute',
    margin: '0 0 0 4.5em',
    zIndex: 100,
    alignItems: 'center',
    zIndex: '200',
    width: '70vw',

    [theme.breakpoints.down('xl')]: {
      marginLeft: '4.7rem',
    },
    [theme.breakpoints.down('lg')]: {
      marginLeft: '4.3rem',
    },

    [theme.breakpoints.down('md')]: {
      margin: '0 0 0 3.0em',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 2.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0 0 0 1.7rem',
    },
  },
  hylse: {
    background: 'linear-gradient(rgb(200, 200, 200), rgb(66, 66, 66))',
    height: '10rem',
    width: '75rem',
    display: 'flex',
    alignItems: 'center',
    zIndex: -2,
    boxShadow: '1px 1px 20px black',
    [theme.breakpoints.down('xl')]: {
      width: '69rem',
    },
    [theme.breakpoints.down('lg')]: {
      width: '64rem',
      height: '9rem',
    },

    [theme.breakpoints.down('md')]: {
      width: '38rem',
      height: '5rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '38rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '20.5rem',
      height: '3rem',
    },
  },

  hylseKile: {
    height: '3.5rem',
    width: '80rem',
    background: 'linear-gradient(rgb(204, 204, 204), rgb(70, 69, 69))',
    boxShadow: 'inset 14px 1px 3px rgba(0, 0, 0, 0.8)',
    borderBottomRightRadius: '10px',
    borderTopRightRadius: '10px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    zIndex: 10,
    borderTopLeftRadius: '40px',
    borderBottomLeftRadius: '40px',
    border: '1px solid gray',
    zIndex: 1,
    [theme.breakpoints.down('xl')]: {
      width: '90rem',
      marginLeft: '-2rem',
    },
    [theme.breakpoints.down('lg')]: {
      width: '67rem',
      height: '3rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '86.2vw',
      height: '1.8rem',
      marginLeft: '-1.2rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '19.3rem',
      height: '1.1rem',
      marginLeft: '-0.6rem',
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
    height: '14rem',
    background: 'linear-gradient(rgb(184, 184, 184), rgb(56, 56, 56))',
    borderRadius: '5px',
    boxShadow: '10px 10px 30px black',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid gray',
    width: '6.5rem',
    [theme.breakpoints.down('lg')]: {
      height: '12rem',
      width: '4.8rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '7rem',
      width: '4rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '1.6rem',
      height: '4rem',
    },
  },

  hylseEnd: {
    height: '10rem',
    width: '6.5rem',
    background: 'linear-gradient(rgb(175, 175, 175), rgb(85, 85, 85))',
    right: '-2rem',
    display: 'flex',
    alignItems: 'center',
    borderBottomRightRadius: '5px',
    borderTopRightRadius: '5px',
    overflow: 'hidden',
    [theme.breakpoints.down('lg')]: {
      height: '9rem',
      width: '5.6rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '5rem',
      width: '3.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '2.9rem',
      width: '1.8rem',
    },
  },
  gang: {
    height: '10rem',
    width: '0.1em',
    background: 'gray',
    margin: '0 0.1rem',
    [theme.breakpoints.down('lg')]: {
      height: '12rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '10rem',
    },
  },
  '&last-child': {
    height: '9.7em',
    alignItems: 'center',
  },
  kileSporGangs: {
    height: '3.6rem',
    width: '3rem',
    background: 'rgb(85, 85, 85)',
    position: 'absolute',
    borderTopRightRadius: '50px',
    borderBottomRightRadius: '50px',
    marginLeft: '-.5em',
    boxShadow: 'inset 1px 9px 3px black',
    [theme.breakpoints.down('lg')]: {
      height: '2.9rem',
      width: '2rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '1.5rem',
      height: '1.7rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '1.2rem',
      height: '1rem',
    },
  },
  blade: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    background:
      'linear-gradient(0deg, rgba(255,242,93,1) 0%, rgba(163,82,11,1) 100%)',

    width: '3px',
    zIndex: 1,
    height: '30rem',
    boxShadow: '5px 10px 10px black',

    [theme.breakpoints.down('xl')]: {
      height: '38rem',
    },
    [theme.breakpoints.down('lg')]: {
      height: '30rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '2px',
      height: '15rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '20vh',
      width: '2px',
    },
  },
  bladeTop: {
    color: 'orangered',
    position: 'absolute',
    top: '-1.5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '.7rem',
      top: '-1rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '.4rem',
    },
  },
  bladeBottom: {
    position: 'absolute',
    color: 'orangered',
    bottom: '-1.5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '.7rem',
      bottom: '-1rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '.4rem',
    },
  },
  content: {
    color: 'transparent',
  },
}));
const Hylse = ({ post }) => {
  //   const startRingsCount = post.startRings.length;
  //   const rawRingsCount = post.rawInput.length;
  //   const endRingsCount = post.endRings.length;
  //   const countAllRings = startRingsCount + rawRingsCount + endRingsCount;

  const classes = useStyles();
  return (
    <>
      {post && (
        <div className={classes.background}>
          <div className={classes.hylseContainer}>
            <div className={`hylse ${classes.hylse}`}>
              <div className={classes.ringContainer}>
                {post.startRings.map((ring) => {
                  return (
                    <div>
                      <FillRings fillRingVal={ring.input} />
                    </div>
                  );
                })}

                <div className={classes.blade}>
                  <span className={classes.content}>Content</span>
                  <Typography className={classes.bladeTop}>
                    {(post.blades.bladStamme + 1.4).toFixed(1)}
                  </Typography>
                  <Typography className={classes.bladeBottom}>
                    {post.blades.bladStamme.toFixed(1)}
                  </Typography>
                </div>

                {post.rawInput.map((rawIn) => {
                  return (
                    <div>
                      <RawRings
                        rawVal={rawIn.input}
                        ringVal={rawIn.ring}
                        shimVal={rawIn.shims}
                        shimsVal2={rawIn.shims2}
                        shimsVal3={rawIn.shims3}
                        postInfo={post}
                      />
                    </div>
                  );
                })}

                {post.endRings.map((ring) => {
                  return (
                    <div>
                      <FillRings fillRingVal={ring.input} />
                    </div>
                  );
                })}
              </div>

              <div className={`hylse-start ${classes.hylseStart}`}>
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
                  <div className={classes.gang}></div>
                  <div className={classes.gang}></div>
                  <div className={classes.gang}></div>
                </Hidden>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hylse;
