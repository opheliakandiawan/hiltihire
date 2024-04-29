import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import theme from './app/platform/components/Theme/theme';
import router from './app/platform/components/navigation/router';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
