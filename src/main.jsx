import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import theme from './app/platform/Theme/theme';
import router from './app/platform/components/Navigation/router';
import GlobalStyle from './app/platform/Style/GlobalStyle';
import './globalStyles/fonts.css';
import './globalStyles/reset.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
