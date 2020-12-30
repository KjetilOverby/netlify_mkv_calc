import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  rawRingContainer: {
    position: 'relative',
  },
  rawDistanceRing: {
    margin: '0 .2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    zIndex: '200',
    border: '1px solid gray',
    borderRadius: '4px',
    boxShadow: '1px 10px 20px black',
    flexDirection: 'column',
    height: '14rem',
    width: '5.5rem',
    background:
      'linear-gradient(4deg, rgb(30, 0, 10) 0%, rgba(248,255,143,1) 50%, rgb(144, 91, 59) 100%)',
    [theme.breakpoints.down('lg')]: {
      height: '12rem',
      width: '5rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '7rem',
      width: '2.8rem',
      background:
        'linear-gradient(4deg, rgba(2,0,36,1) 0%, rgba(36,149,126,1) 35%, rgba(0,255,229,1) 100%)',
    },
    [theme.breakpoints.down('xs')]: {
      height: '4rem',
      width: '1.7rem',
      margin: '0 .05rem',
      borderRadius: '1px',
    },
  },
  rawVal: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    position: 'absolute',
    color: '#803418',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.6rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '.8rem',
      color: 'white',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.5rem',
    },
  },
  rawInput: {
    position: 'absolute',

    color: '#62d6aa',
    bottom: '10em',
    fontSize: '1.5rem',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem',
      bottom: '12.5rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '.8rem',
      bottom: '9em',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
      bottom: '8em',
    },
  },
  ringVal: {
    position: 'absolute',
    color: '#100f58',
    top: '14.5rem',
    fontSize: '1.2rem',
    fontStyle: 'italic',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem',
      top: '12.5rem',
    },
    [theme.breakpoints.down('md')]: {
      top: '7.5rem',
      color: 'blue',
      fontSize: '0.8rem',
    },
    [theme.breakpoints.down('xs')]: {
      top: '4.5rem',
      fontSize: '.5rem',
    },
  },
  shimsVal: {
    position: 'absolute',
    color: '#097a7a',
    top: '16.5rem',
    fontSize: '1.2rem',
    fontStyle: 'italic',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem',
      top: '14rem',
    },
    [theme.breakpoints.down('md')]: {
      top: '8.7rem',

      fontSize: '0.8rem',
      color: 'blue',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
      top: '5.2rem',
    },
  },
  shimsVal2: {
    fontStyle: 'italic',
    position: 'absolute',
    color: '#9b6208',
    top: '18.5rem',
    fontSize: '1.2rem',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem',
      top: '15.5rem',
    },
    [theme.breakpoints.down('md')]: {
      top: '10rem',

      fontSize: '0.8rem',
      color: 'blue',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
      top: '6rem',
    },
  },
  shimsVal3: {
    fontStyle: 'italic',
    position: 'absolute',
    color: '#9b6208',
    top: '20.5rem',
    fontSize: '1.2rem',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem',
      top: '17rem',
    },
    [theme.breakpoints.down('md')]: {
      top: '11.3rem',

      fontSize: '0.8rem',
      color: 'blue',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
      top: '6.8rem',
    },
  },
  blade: {
    display: 'flex',
    justifyContent: 'center',
    background:
      'linear-gradient(0deg, rgba(255,242,93,1) 0%, rgba(163,82,11,1) 100%)',
    position: 'absolute',
    width: '3px',
    right: '0%',
    boxShadow: '5px 10px 10px black',
    [theme.breakpoints.down('xl')]: {
      height: '38rem',
    },
    [theme.breakpoints.down('lg')]: {
      height: '30rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '15rem',
      width: '2px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '20vh',
    },
  },
  bladeTop: {
    position: 'absolute',
    color: 'orangered',
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
}));
const RawRings = (props) => {
  const classes = useStyles();

  const ringShimsVal = Number(props.rawVal) + 1.4 - Number(props.ringVal);

  return (
    <div className={classes.rawRingContainer}>
      <div className={classes.rawDistanceRing}>
        <Typography className={classes.rawInput}>{props.rawVal}</Typography>
        <Typography className={classes.rawVal}>
          {(Number(props.rawVal) + 1.4).toFixed(1)}
        </Typography>

        <Typography className={classes.ringVal}>{props.ringVal}</Typography>

        {props.ringVal && (
          <Typography className={classes.shimsVal}>
            {(
              Number(ringShimsVal) -
              Number(props.shimsVal2 != undefined && props.shimsVal2)
            ).toFixed(1)}
          </Typography>
        )}

        {props.shimsVal2 && (
          <Typography className={classes.shimsVal2}>
            {props.shimsVal2 -
              (props.shimsVal3 != undefined && props.shimsVal3)}
          </Typography>
        )}

        {props.shimsVal2 && (
          <Typography className={classes.shimsVal3}>
            {props.shimsVal3}
          </Typography>
        )}

        <div className={classes.blade}>
          <Typography className={classes.bladeTop}>
            {(Number(props.postInfo.blades.bladStamme) + 1.4).toFixed(1)}
          </Typography>

          <Typography className={classes.bladeBottom}>
            {props.postInfo.blades.bladStamme.toFixed(1)}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default RawRings;
