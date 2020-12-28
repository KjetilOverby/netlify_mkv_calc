import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import axios from 'axios';

export default function MyApp(props) {
  const api = axios.create({
    baseURL: process.env.API_URL,
  });
  const { Component, pageProps } = props;
  const [posts, setPosts] = useState();
  const [postID, setPostID] = useState();
  const [post, setPost] = useState();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(async () => {
    try {
      await api.get('/', {}).then((res) => {
        setPosts(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    api
      .get(`/${postID}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch(function (e) {
        console.log(e);
      });
  }, [postID]);
  console.log('====================================');
  console.log(postID);
  console.log('====================================');
  return (
    <React.Fragment>
      <Head>
        <title>Post calculator</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component
          {...pageProps}
          posts={posts}
          setPostID={setPostID}
          post={post}
        />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
