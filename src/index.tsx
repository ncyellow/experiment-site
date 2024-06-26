import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/app/app';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Provider> */}
    <App />
    {/* </Provider>
    </BrowserRouter> */}
  </React.StrictMode>
);
