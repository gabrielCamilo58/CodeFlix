import * as React from 'react';
import {Box, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Layout from './components/Layout';
import { appTheme } from './config/theme';
import {Routes, Route, Link } from "react-router-dom"

export default function MyApp() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
      component="main"
      sx={{
        height: "100vh",
        backgroundColor: (theme) => theme.palette.grey[900],
      }}
      >
        <Header></Header>
        <Layout>
          <h1>Olá mundo</h1>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

