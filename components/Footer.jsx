import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Typography, Grid, Button, Hidden } from '@material-ui/core';
import WidgetsIcon from '@material-ui/icons/Widgets';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100vw',
    alignItems: 'center',
    background: '#3f3f3f',
    justifyContent: 'space-between',
    padding: '0 2rem',
    height: '3em',
    boxShadow: '-5px -5px 10px rgba(0,0,0,.2)',
  },
  leftPart: {
    color: 'white',
    display: 'flex',
  },
  rightPart: {
    display: 'flex',
    width: '25vw',
    flexDirection: 'row',
    justifyContent: 'space-around',
    color: 'lightblue',
    [theme.breakpoints.down('lg')]: {
      width: '35vw',
    },
  },
  classicCalcBtn: {},
  copyRight: {
    color: 'white',
    position: 'absolute',
    marginLeft: '50%',
    transform: 'translateX(-70%)',
  },
}));

export default function SimpleBottomNavigation({ user }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  console.log(user);
  const currentYear = new Date().getFullYear();
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
      <Hidden mdDown>
        <Grid item className={classes.leftPart}>
          {/* <Button className={classes.classicCalcBtn}>
            {' '}
            <a
              className={classes.classicCalcBtn}
              style={{
                textDecoration: 'none',
                fontSize: '.8rem',
              }}
              href="https://mkv-calculator.ktl.now.sh"
              target="_blank"
            >
              <WidgetsIcon style={{ paddingTop: '.5rem' }} /> Classic Calculator
            </a>
          </Button> */}
        </Grid>

        <Typography className={classes.copyRight}>
          © Copyright {currentYear}
        </Typography>

        <Grid item className={classes.rightPart}>
          {user && (
            <>
              <p>
                Status:{' '}
                {user.name ? 'innlogget som ' + user.name : 'Ikke innlogget'}
              </p>
              <img
                style={{
                  height: '1.2em',
                  borderRadius: '50%',
                  marginTop: '1rem',
                }}
                src={user.picture}
                alt=""
              />

              <p>{user.updated_at}</p>
            </>
          )}
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid container justify="center">
          <Grid item>
            <Typography style={{ color: 'white' }}>
              © Copyright {currentYear}
            </Typography>
          </Grid>
        </Grid>
      </Hidden>
    </BottomNavigation>
  );
}
