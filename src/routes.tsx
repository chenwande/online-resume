import HomePage from './pages/home';
import Edit from './pages/edit';

const routerConfig = [
  { path: '/', element: <HomePage /> },
  { path: '/edit', element: <Edit /> },
];

export default routerConfig;
