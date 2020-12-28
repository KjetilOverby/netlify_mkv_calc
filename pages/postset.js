import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));
const postset = ({ post }) => {
  const classes = useStyles();

  return <div>{post && <h1>{post.header}</h1>}</div>;
};

export default postset;
