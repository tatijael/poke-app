import React from 'react';
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import routes from '../routes'

import { GlobalStyle, theme } from './styles'

const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <BrowserRouter>
            <Routes>
              {
              routes.map((props) => (
                <Route {...props} />
              ))
              }
            </Routes>
          </BrowserRouter>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
