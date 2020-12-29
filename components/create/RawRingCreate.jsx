import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  rawRingContainer: {
    position: 'relative',
    [theme.breakpoints.down('xs')]: {},
  },
  rawDistanceRing: {
    margin: '0 .2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    zIndex: '100',
    border: '1px solid gray',
    borderRadius: '4px',
    boxShadow: '5px 5px 30px rgba(0,0,0,.3)',
    flexDirection: 'column',
    height: '10rem',
    width: '4.5rem',
    background:
      'linear-gradient(4deg, rgb(173, 154, 75) 0%, rgba(248,255,143,1) 50%, rgb(169, 158, 40) 100%)',
    [theme.breakpoints.down('lg')]: {
      height: '6.5rem',
      width: '3rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '7rem',
      width: '2.6rem',
      background:
        'linear-gradient(4deg, rgba(2,0,36,1) 0%, rgba(36,149,126,1) 35%, rgba(0,255,229,1) 100%)',
    },
    [theme.breakpoints.down('xs')]: {
      height: '4rem',
      width: '1.5rem',
      margin: '0 .05rem',
    },
  },
  rawVal: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    position: 'absolute',
    color: '#803418',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem',
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

    color: 'blue',
    bottom: '9em',
    fontSize: '1.2rem',
    [theme.breakpoints.down('lg')]: {
      fontSize: '.8rem',
      bottom: '7.5rem',
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
    color: 'blue',
    top: '10.5rem',
    fontSize: '1.2rem',
    fontStyle: 'italic',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem',
      top: '7.5rem',
    },
    [theme.breakpoints.down('md')]: {
      top: '7.5rem',

      fontSize: '0.8rem',
    },
    [theme.breakpoints.down('xs')]: {
      top: '4.5rem',
      fontSize: '.5rem',
    },
  },
  shimsVal: {
    position: 'absolute',
    color: 'brown',
    top: '12.5rem',
    fontSize: '1.2rem',
    fontStyle: 'italic',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem',
      top: '9rem',
    },
    [theme.breakpoints.down('md')]: {
      top: '8.7rem',

      fontSize: '0.8rem',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
      top: '5.2rem',
    },
  },
  shimsVal2: {
    fontStyle: 'italic',
    position: 'absolute',
    color: 'orange',
    top: '14.5rem',
    fontSize: '1.2rem',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem',
      top: '10.5rem',
    },
    [theme.breakpoints.down('md')]: {
      top: '10rem',

      fontSize: '0.8rem',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
      top: '6rem',
    },
  },
  shimsVal3: {
    fontStyle: 'italic',
    position: 'absolute',
    color: 'green',
    top: '16.5rem',
    fontSize: '1.2rem',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem',
      top: '12rem',
    },
    [theme.breakpoints.down('md')]: {
      top: '11.3rem',

      fontSize: '0.8rem',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
      top: '6.8rem',
    },
  },
  blade: {
    display: 'flex',
    justifyContent: 'center',
    background: 'orange',
    position: 'absolute',
    width: '3px',
    right: '0%',
    boxShadow: '5px 10px 10px black',
    [theme.breakpoints.down('xl')]: {
      height: '30rem',
    },
    [theme.breakpoints.down('lg')]: {
      height: '20rem',
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
    fontSize: '.8rem',
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
    fontSize: '.8rem',
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

  const ringShimsVal = (
    Number(props.value) +
    1.4 -
    Number(props.ringVal)
  ).toFixed(2);
  const ringPlusVigg = (Number(props.value) + 1.4).toFixed(1);
  const shimsValue2 = props.shimsVal2 != undefined;

  // const shimsVal1Variable = ((Number(ringShimsVal) - (props.shimsVal2 != undefined && Number(props.shimsVal2))).toFixed(1))
  // const shimsVal1Variable2 = ((Number(ringShimsVal) - props.shimsVal3 - (props.shimsVal2 != undefined && Number(props.shimsVal2))).toFixed(1))
  const secondLabel = (ringPlusVigg - props.ringVal).toFixed(1);
  const secondLabelFinal = (
    secondLabel - (props.shimsVal2 != undefined && props.shimsVal2)
  ).toFixed(1);
  const thirdLabel = (
    props.shimsVal2 - (props.shimsVal3 != undefined && props.shimsVal3)
  ).toFixed(1);

  return (
    <div className={classes.rawRingContainer}>
      <div className={classes.rawDistanceRing}>
        <Typography className={classes.rawInput}>{props.value}</Typography>
        <Typography className={classes.rawVal}>{ringPlusVigg}</Typography>

        {/* <Typography className={classes.ringVal}>{props.ringVal}</Typography>
  
 {props.shimsVal2 &&  (
  <Typography className={classes.shimsVal}>{props.shimsVal2}</Typography>
 )}
 
 {props.ringVal && (
  <Typography className={classes.shimsVal2}>{props.shimsVal3 === undefined ? shimsVal1Variable : shimsVal1Variable - props.shimsVal3}</Typography>
 )}
  
  {props.shimsVal2 &&  (
    <Typography className={classes.shimsVal3}>{props.shimsVal - props.shimsVal3 != undefined && props.shimsVal3}</Typography>
  )} */}

        <Typography className={classes.ringVal}>{props.ringVal}</Typography>

        {props.ringVal && (
          <Typography className={classes.shimsVal}>
            {secondLabelFinal}
          </Typography>
        )}
        {props.shimsVal2 && (
          <Typography className={classes.shimsVal2}>{thirdLabel}</Typography>
        )}

        {props.shimsVal3 && (
          <Typography className={classes.shimsVal3}>
            {props.shimsVal3}
          </Typography>
        )}

        <div className={classes.blade}>
          <Typography className={classes.bladeTop}>
            {(Number(props.bladStamme) + 1.4).toFixed(1)}
          </Typography>

          <Typography className={classes.bladeBottom}>
            {props.bladStamme}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default RawRings;
