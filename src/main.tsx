import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import routerConfig from './routes';
import { useRoutes } from 'react-router-dom';
import './assets/css/index.scss'
import './assets/css/var.css'

const App = () => {
  const routes = useRoutes(routerConfig);
  return <>{routes}</>;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App></App>
    </HashRouter>
  </React.StrictMode>
);
